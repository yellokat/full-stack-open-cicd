#!/bin/bash
npm install
npm audit fix --force
npm run build:ui