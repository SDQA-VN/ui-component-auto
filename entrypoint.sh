#!/bin/sh

set -e

sudo apt-get update 
sudo apt-get install google-chrome-stable 
npm install
npm run preparation