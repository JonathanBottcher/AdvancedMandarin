#!/usr/bin/python
# -*- coding: utf-8 -*-

import json
import jieba

#from typing import List
'''
def separate_words(sentence: str) -> List[str]:
	
	
	segmentation = jieba.cut(sentence, cut_all=True)
	#print(' '.join(segmentation))
	seg_list = [i for i in segmentation]
	

	return seg_list

#print(separate_words('我觉得你是一个很好的学生'))
#print(separate_words('你好'))
'''

def det_level(sentence : str) -> float:
	
	path = '/home/jonathan/Projects/AdvancedChinese/backend/mandarin_sentences/sentences/sentence_processing/hsklevels.json'
	levels_list = [] #holds the level of each word
			
			
	#Word Segmentation		
	segmentation = jieba.cut(sentence, cut_all=True)
	#print(' '.join(segmentation))
	seg_list = [i for i in segmentation]
	#print(seg_list)
			
			
	
	
	#Level determining
	with open(path, 'r', encoding='utf-8') as levels_file:
		levels = json.load(levels_file)
		
	for i in seg_list:
		for j in levels.keys():
			if i == j:
				levels_list.append(levels[j])
					
	
	average_level = 0
	
	for l in levels_list:
		average_level += l

	
	if len(levels_list) == 0:
		return 0
	
	return(round(average_level / len(levels_list)))

#if __name__ == '__main__':
#	det_level()

#test
#print(det_level('我觉得你是一个很好的学生'))
#print(det_level('你好'))

