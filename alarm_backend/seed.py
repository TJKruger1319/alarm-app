from models import db, Alarm
from app import app


db.drop_all()
db.create_all()

Alarm.query.delete()


alarm = Alarm(hour=11, minute=30, AMorPM="AM", type="math", difficulty=1, sound="Tot Musica (placeholder)")
db.session.add(alarm)
db.session.commit()