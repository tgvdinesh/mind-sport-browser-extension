#!/usr/bin/env node

const chromeLauncher = require('chrome-launch');


const url = 'https://www.hackerrank.com/challenges/30-loops/problem';
const args = ['--load-extension=./static'];

chromeLauncher(url, {args});