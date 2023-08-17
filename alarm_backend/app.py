from flask import Flask, jsonify
from models import db, connect_db, Alarm
from helper import serialize
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///alarmdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "I'LL NEVER TELL!!"

app.app_context().push()
connect_db(app)


@app.route("/alarms")
def get_all_alarms():
    """Get all alarms"""
    all_alarm = []
    alarms = Alarm.query.all()
    for a in alarms:
        all_alarm.append(serialize(a))
    return jsonify(all_alarm)