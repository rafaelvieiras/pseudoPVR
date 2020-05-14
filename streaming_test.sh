#!/bin/bash

# ffmpeg -fflags nobuffer -flags low_delay -stream_loop -1 -i justice.mkv -c:v copy -f rtsp rtsp://localhost:5555/batman
# ffmpeg -fflags +igndts -stream_loop -1 -i justice.mkv -map 0:0 -map 0:1 -vcodec libx264 -acodec copy -f rtsp -rtsp_transport udp rtsp://localhost:1935/batman
ffmpeg -re -i justice.mkv -c:v libx264 -preset superfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost:1935/live/batman