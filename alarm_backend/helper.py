def serialize(a):
    return {
        'id' : a.id,
        'hour' : a.hour,
        'minute' : a.minute,
        'AMorPM' : a.AMorPM,
        'type' : a.type,
        'difficulty' : a.difficulty,
    }