from flask import Flask, jsonify, request
from flask_cors import CORS
from routes import register_routes
import json

app = Flask(__name__)
CORS(app)  # Flask CORS 활성화
# JSON 파일을 로컬 DB로 활용
DB_FILE = 'db.json'

# 기본 라우팅 등록
register_routes(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "What If Drawing API Server is running"}), 200

# 서버 실행
if __name__ == '__main__':
    app.run(port=5000, debug=True)
