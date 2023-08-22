from flask import Flask, jsonify, request
from models import db, connect_db, Alarm
from helper import sort
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
    alarms = Alarm.query.all()
    sorted_alarms = sort(alarms)
    return jsonify(sorted_alarms)


@app.route("/alarms/add", methods=['POST'])
def add_alarm():
    """Add an alarm"""
    response = request.json
    hour = response['hour']
    minute = response['minutes']
    amPm = response['amPmOption']
    type = response['type']
    difficulty = response['difficulty']

    new_alarm = Alarm(hour=hour, minute=minute, AMorPM=amPm, type=type, difficulty=difficulty)
    db.session.add(new_alarm)
    db.session.commit()
    return "Success"

@app.route("/alarms/<int:alarm_id>/delete", methods=['POST'])
def delete_alarm(alarm_id):
    """Delete an alarm"""
    alarm = Alarm.query.get_or_404(alarm_id)
    db.session.delete(alarm)
    db.session.commit()
    return "Success"