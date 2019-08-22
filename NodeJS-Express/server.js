'use strict';

const express = require('express');

let myEnvArg = '(env argument not specified.)';

process.argv.forEach(function (val, index, array) {

  console.log("val");
  console.log(val);

  if (val.indexOf('env:') != -1) {

     let envArg = val.split(":")[1];

     if (envArg == "dockerCompose") myEnvArg = "  (From docker-compose via npm start script from package.json)";
     if (envArg == "commandLine") myEnvArg = " (From docker cli build from a Dockerfile )";

  }

});



// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1> Hello world from NodeJS in a Docker Container ' + myEnvArg + '</h1>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);