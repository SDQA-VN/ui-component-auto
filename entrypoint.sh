#!/bin/sh

set -e
cd /source/ui-component-auto
ls -l
cd /source/ui-component-auto/node_modules
ls -l
cd ..
chromium-browser -version
npm run preparation
