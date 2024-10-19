from tatoebatools import ParallelCorpus
from sentences.models import Sentence
from utils.sentence_processing.det_level import det_level

def download_sentences():
    for sentence, translation in ParallelCorpus("cmn", "eng"):
        Sentence.objects.create(
            original = sentence.text,
            translation = translation.text,
            level = det_level(sentence.text)
        )

    else:
        print("Finished downloading sentences.")