from flask import jsonify, request
from models import DiaryEntry
import json
import uuid

DB_FILE = 'db.json'

def load_data():
    try:
        with open(DB_FILE, 'r') as file:
            return json.load(file)
    except:
        return []

def save_data(data):
    with open(DB_FILE, 'w') as file:
        json.dump(data, file, indent=4)

def register_routes(app):
    @app.route('/api/diary', methods=['GET'])
    def get_diaries():
        data = load_data()
        return jsonify(data), 200

    @app.route('/api/diary', methods=['POST'])
    def add_diary():
        diary_data = request.json
        diary = DiaryEntry(
            id=str(uuid.uuid4()),
            date=diary_data['date'],
            content=diary_data['content'],
            sns_usage=diary_data['sns_usage'],
            image_path=diary_data.get('image_path', "")
        )
        data = load_data()
        data.append(diary.to_dict())
        save_data(data)
        return jsonify(diary.to_dict()), 201
