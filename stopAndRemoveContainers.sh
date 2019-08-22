#!/bin/bash
containers=$(docker ps -a -q)
if [ ${#containers[@]} != "0" ]
 then
    # echo "${#containers[@]}"
    # echo "There are containers running."
    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)
fi