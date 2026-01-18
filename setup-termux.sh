#!/bin/bash
pkg update -y
pkg install -y python nodejs git
pip install --upgrade pip
pip install -r backend/requirements.txt
npm install --prefix frontend
