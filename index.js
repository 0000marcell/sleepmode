#!/usr/bin/env node
const { exec } = require('child_process');

let time = process.argv[2];
if(!time) time = 36000

exec('open https://archive.org/details/FOTR22chapter', (err) => {
  if(err) console.error(err); 
});

setTimeout(function(){
  exec('pmset sleepnow', (err) => {
    if(err) console.error(err);
  });
}, time)
