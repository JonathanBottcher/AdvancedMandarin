from sentences.models import Sentence

class SentenceRouter():
    def db_for_read(self, model, **hints):
        return "sentences"


    def db_for_write(self, model, **hints):
        return "sentences"
