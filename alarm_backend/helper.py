def serialize(a):
    return {
        'id' : a.id,
        'hour' : a.hour,
        'minute' : a.minute,
        'AMorPM' : a.AMorPM,
        'type' : a.type,
        'difficulty' : a.difficulty,
    }


def sort(alarms):
    for i in range(len(alarms)):
        hours = alarms[i].hour
        minutes = alarms[i].minute
        if alarms[i].AMorPM == "PM":
            hours = hours + 12
        ia = str(hours) + str(minutes)
        for j in range(len(alarms)):
            hours2 = alarms[j].hour
            minutes2 = alarms[j].minute
            if alarms[j].AMorPM == "PM":
                hours2 = hours2 + 12
            ja = str(hours2) + str(minutes2)
            if ia < ja:
                alarms[j],alarms[i] = alarms[i],alarms[j]
    all_alarms = []
    for a in alarms:
        all_alarms.append(serialize(a))
    return all_alarms
