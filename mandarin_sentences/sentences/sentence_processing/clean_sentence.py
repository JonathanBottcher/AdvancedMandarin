# This function removes every symbol that is not a character, such as commas,dots,question marks, etc
def cleanSentence(rawSentence):
	ignore = [".", ",", "?", "。", "!", "¡"]
	for symbol in ignore:
		for s_symbol in rawSentence:
			if s_symbol == symbol:
				sentence = rawSentence.replace(s_symbol, "")
				rawSentence = sentence
				
			
	return rawSentence