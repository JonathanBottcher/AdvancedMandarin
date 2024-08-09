from datetime import datetime
from sentences.models import Sentence 
from . import clean_sentence
from . import det_sentence_level

from tatoebatools import ParallelCorpus

# allows the download of sentences
allow_download = True 

def clean_n_lvl(sentence):
    clean_s = clean_sentence.cleanSentence(sentence)
    final_s = det_sentence_level.det_level(clean_s)
    return final_s


def download_sentences():
    if allow_download:
        for sentence, translation in ParallelCorpus("cmn", "eng"):
            level = clean_n_lvl(sentence.text)
            Sentence.objects.create(
                original = sentence.text,
                translation = translation.text,
                level = level

            
        )
        #  This else statement follows the for loop not the if statement    
        else:
            print("Finished Downloading")
            
            
        


    
    
