import pandas as pd

def det_level(sentence : str)-> float:
	word_index = []
	path = 'E:\Jonathan\Desktop\Mandarin Sentences\hsk_list\words.tsv'
	words = pd.read_csv(path, sep='\t', encoding='utf-16')
	
	for i  in sentence:
		for j in words['Character']:
			if i == j:
				word_index.append(words.Character[words.Character == j].index.tolist())
				
	indexes = []
	for k in word_index:
		indexes.append(k[0])
		
	
	levels = []
	for x in indexes:
		levels.append(words.iat[x, 2])
		
	
	#caculate average sentence level
	l_sum = 0
	for y in levels:
		l_sum += y
		
	if len(levels) != 0:
		average_level = l_sum/len(levels)
	else:
		average_level = 6
	
	return average_level
