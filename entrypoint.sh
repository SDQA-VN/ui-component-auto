#!/bin/sh

set -e
cd /source/ui-component-auto
ls -l
chromium-browser -version
npm run preparation
