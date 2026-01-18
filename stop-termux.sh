#!/bin/bash

[ -f backend.pid ] && kill $(cat backend.pid) && rm backend.pid
[ -f frontend.pid ] && kill $(cat frontend.pid) && rm frontend.pid

echo "Stopped"
