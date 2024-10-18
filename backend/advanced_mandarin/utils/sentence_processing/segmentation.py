import jieba

def segment(sentence: str) -> list[str]:
    seg_sentence = jieba.cut(sentence, cut_all=True)
    return [i for i in seg_sentence]
    