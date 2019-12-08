#!/bin/sh

set -e
cd /source/ui-component-auto
ls -l
cat /source/ui-component-auto/node_modules
chromium-browser -version
npm run preparation
