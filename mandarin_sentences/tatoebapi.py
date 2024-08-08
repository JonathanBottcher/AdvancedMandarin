import datetime


x = datetime.datetime.now()
day = x.strftime("%a")
hour = x.strftime("%H")
alr_dwnloaded = False

if day == "Mon" and hour == "13" and (not alr_dwnloaded):
	print("hello")
	alr_dwnloaded = True
	
else:
	alr_dwnloaded = True
