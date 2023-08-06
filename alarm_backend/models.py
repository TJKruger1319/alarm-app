from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    """Connect to a database"""
    db.app = app
    db.init_app(app)

class Alarm(db.Model):
    """Alarm"""

    __tablename__ = "alarms"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    hour = db.Column(db.Integer, nullable=False)
    minute=db.Column(db.Integer, nullable=False)
    AMorPM = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    difficulty = db.Column(db.Integer, nullable=False)
    sound = db.Column(db.String, nullable=False)
