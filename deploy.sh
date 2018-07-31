#!/bin/bash
set -e -x
apt-get update
apt-get -y install nodejs npm git
ln -s /usr/bin/nodejs /usr/local/bin/node

cd ~
git clone https://github.com/click66/simple-nodejs-app.git
cd simple-nodejs-app.

npm install
npm start
