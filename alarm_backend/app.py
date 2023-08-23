from flask import Flask, jsonify, request, make_response
from models import db, connect_db, Alarm
from helper import makeDict, generate_math_prompt, serialize, generate_random_sentence
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
    sorted_alarms = makeDict(alarms)
    preserialized = []
    for a in sorted_alarms:
        alarm = Alarm.query.get_or_404(a)
        preserialized.append(alarm)
    final_list = []
    for a in preserialized:
        new_alarm = serialize(a)
        final_list.append(new_alarm)
    return jsonify(final_list)


@app.route("/alarms/add", methods=['POST'])
def add_alarm():
    """Add an alarm"""
    try:
        response = request.json
        hour = response['hour']
        minute = response['minutes']
        amPm = response['amPmOption']
        type = response['type']
        difficulty = response['difficulty']

        new_alarm = Alarm(hour=hour, minute=minute, AMorPM=amPm, type=type, difficulty=difficulty)
        db.session.add(new_alarm)
        db.session.commit()
        return make_response(jsonify({"message": "Alarm successfully added", "id": new_alarm.id}), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

@app.route("/alarms/<int:alarm_id>", methods=['DELETE'])
def delete_alarm(alarm_id):
    try:
        alarm = Alarm.query.get_or_404(alarm_id)
        db.session.delete(alarm)
        db.session.commit()
        return make_response(jsonify({"message": "Alarm successfully deleted", "id": alarm_id}), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


@app.route("/Math")
def math_problem():
    """Returns math problems"""
    problem = generate_math_prompt()
    return jsonify(problem)


@app.route("/Typing")
def get_sentence():
    sentence = generate_random_sentence()
    return jsonify(sentence)