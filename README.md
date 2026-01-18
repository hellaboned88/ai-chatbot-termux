# AI Chatbot – Termux Edition

Mobile-first AI chatbot running on Android via Termux.

## Features
- FastAPI backend
- React + Vite frontend
- Streaming responses
- SQLite local storage
- No Redis, no Docker, no systemd

## Termux Install
```bash
git clone https://github.com/YOUR_USERNAME/ai-chatbot-termux.git
cd ai-chatbot-termux
export OPENAI_API_KEY=your_key_here
./setup-termux.sh
./start-termux.sh
