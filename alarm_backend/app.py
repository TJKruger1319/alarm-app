from flask import Flask
from models import db, connect_db, Alarm


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///alarmdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "I'LL NEVER TELL!!"

app.app_context().push()
connect_db(app)


@app.route("/alarms")
def root():
    """Get all alarms"""
    alarms = Alarm.query.all()
    return alarms