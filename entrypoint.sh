#!/bin/sh

set -e
npm install
ls -l
cd ./node_modules
ls -l
npm run preparation
