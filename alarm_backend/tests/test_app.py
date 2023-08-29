import os
from unittest import TestCase
from models import db, connect_db, Alarm
from flask import json

os.environ['DATABASE_URL'] = "postgresql:///alarm-test"

from app import app

db.create_all()


def checkJson(s):
    try:
        json.decode(s)
        return True
    except json.JSONDecodeError:
        return False

class AppTestCase(TestCase):

    def setUp(self):
        Alarm.query.delete()

        alarm = Alarm(hour=11, minute=30, AMorPM="AM", type="math", difficulty=1)
        db.session.add(alarm)
        db.session.commit()

    def tearDown(self):
        db.session.rollback()

    def test_alarms(self):
        with app.test_client() as client:
            resp = client.get('/alarms')
            assert resp.content_type == 'application/json'
            data = checkJson(resp.get_data(as_text=True))
            if data:
                raise Exception("Does not get data in JSON format")
        
    def test_add_alarms(self):
        with app.test_client() as client:
            resp = client.post("/alarms/add", data={
                'hour': '12',
                'minute': '30',
                'amPm': "PM",
                "type": "Math",
                "difficulty": "1"                
            })

            self.assertEqual(resp.status_code, 200)

            alarms = Alarm.query.all()
            self.assertEqual(len(alarms), 2)

    def test_delete_alarms(self):
        with app.test_client() as client:
            resp = client.delete("/alarms/1")
            self.assertEqual(resp.status_code, 200)
            alarms = Alarm.query.all()
            self.assertEqual(len(alarms), 0)

    def test_math_problem(self):
        with app.test_client() as client:
            resp = client.get('/Math')
            assert resp.content_type == 'application/json'
            data = checkJson(resp.get_data(as_text=True))
            if data:
                raise Exception("Does not get data in JSON format")
            
    def test_get_sentence(self):
        with app.test_client() as client:
            resp = client.get('/Typing')
            assert resp.content_type == 'application/json'
            data = checkJson(resp.get_data(as_text=True))
            if data:
                raise Exception("Does not get data in JSON format")

        