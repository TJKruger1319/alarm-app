import random

def serialize(a):
    # Returns an alarm object in a dict
    return {
        'id' : a.id,
        'hour' : a.hour,
        'minute' : a.minute,
        'AMorPM' : a.AMorPM,
        'type' : a.type,
        'difficulty' : a.difficulty,
    }

def makeDict(alarms):
    alarmsDict = {}
    for a in alarms:
        hours = a.hour
        minutes = a.minute
        if hours == 12:
            hours = 0
        if a.AMorPM == "PM":
            hours = hours + 12
        hours = hours * 100
        total = hours + minutes
        alarmsDict[a.id] = total
    return sort(alarmsDict)

def sort(alarmsDict):
    sorted_dict = {k: v for k, v in sorted(alarmsDict.items(), key=lambda item: item[1])}
    return (sorted_dict.keys()) 





def make_math():
    num1 = random.randint(20, 100)
    num2 = random.randint(20, 100)
    return { 'first':num1, 'second':num2 }