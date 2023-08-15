from models import db, Alarm
from app import app


db.drop_all()
db.create_all()

Alarm.query.delete()


alarm = Alarm(hour=11, minute=30, AMorPM="AM", type="math", difficulty=1)
alarm2 = Alarm(hour=5, minute=55, AMorPM="PM", type="pokemon", difficulty=0)
db.session.add(alarm)
db.session.add(alarm2)
db.session.commit()