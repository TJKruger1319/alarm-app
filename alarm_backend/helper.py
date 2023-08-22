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
    alarms_dict = {}
    for a in alarms:
        hours = a.hour
        minutes = a.minute
        if hours == 12:
            hours = 0
        if a.AMorPM == "PM":
            hours = hours + 12
        hours = hours * 100
        total = hours + minutes
        alarms_dict[a.id] = total
    return sort(alarms_dict)

def sort(alarms_dict):
    sorted_items = sorted(alarms_dict.items(), key=lambda item: item[1])
    sorted_dict = dict(sorted_items)
    return list(sorted_dict.keys())





def generate_math_prompt():
    num1 = random.randint(20, 100)
    num2 = random.randint(20, 100)
    return { 'first':num1, 'second':num2 }