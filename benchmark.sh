#!/bin/bash
wrk -t2 -c1000 -d30s $1:3000/
