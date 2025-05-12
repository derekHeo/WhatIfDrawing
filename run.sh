#!/bin/bash

# Flask 서버 실행
cd backend
echo "Starting Flask Server..."
export FLASK_APP=app.py
flask run &

# React 프론트엔드 실행
cd ../frontend
echo "Starting React Frontend..."
npm start
