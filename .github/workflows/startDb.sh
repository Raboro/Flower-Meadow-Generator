#!/bin/bash

CONTAINER_NAME=db

docker run \
    --name $CONTAINER_NAME \
    -e POSTGRES_USER=f-m-generator-user \
    -e POSTGRES_PASSWORD=test1234 \
    -p 5432:5432 \
    -d postgres:13.1-alpine

sleep 3

if [ "$(docker ps -q)" ]; then
    echo "==Success=="
else
    echo "==Error=="
fi