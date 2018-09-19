#!/usr/bin/env node
const { exec } = require('child_process');

exec('open https://archive.org/details/FOTR22chapter', (err) => {
  if(err) console.error(err); 
});

setTimeout(function(){
  exec('pmset sleepnow', (err) => {
    if(err) console.error(err);
  });
}, 1000)
