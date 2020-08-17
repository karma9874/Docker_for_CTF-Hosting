#!/bin/bash
# for web docker
if [ "$#" -ne 2 ]
then
        echo "Usage: ./start.sh <docker name> <port number>"
else
        echo "Building docker"
        docker build -t $1 .
        echo "Running docker"
        docker run -d --name=$1 -p 0.0.0.0:$2:9999 $1
fi