#!/bin/bash

cd ~/ai-chatbot

nohup python backend/main.py > backend.log 2>&1 &
echo $! > backend.pid

cd frontend
nohup npm run dev > frontend.log 2>&1 &
echo $! > frontend.pid

echo "Running:"
echo "API http://127.0.0.1:8000"
echo "UI  http://127.0.0.1:5173"
