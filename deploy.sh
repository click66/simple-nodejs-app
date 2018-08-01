#!/bin/bash
set -e -x
apt-get -y update
apt-get -y install git

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs

cd ~
git clone https://github.com/click66/simple-nodejs-app.git
cd ~/simple-nodejs-app

npm install
npm start
