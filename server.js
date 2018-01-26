// server.js
// where your node app starts

// init project
const url = require('url')
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
/*app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/

// function that returns unix and natural date object
function parsetime (unixtime, naturaldate) {
  return {
    unix: unixtime,
    natural: naturaldate
  }
}

// main route
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

// Processing the api requests for unix timestamp and natural format date
app.get("/*", function (request, response) {
  
  var urlStr = request.url
  var parameterStr = urlStr.split('/');
  var param = parameterStr[1].replace(/%20/g, ' ');
  var result = '';
  // Simple in-memory store for months
  var months = [
    'January', 'February', 'March', 
    'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 
    'November', 'December'];
  
  // define date format
  if (!isNaN(param)) {
    param = Number(param) * 1000;
  }
  var paramDateTime = new Date(param);
  
  // unix timestamp
  var timeParsed = paramDateTime.getTime()/1000;
  
  // natural languade date
  var month = paramDateTime.getMonth();
  var dateParsed =  months[month]  + ' ' + paramDateTime.getDate() + ', ' + paramDateTime.getFullYear();
  
  // check if parameter constains a date or timestamp and if it does returns both the Unix timestamp and the natural language form of that date 
  // otherwise is NaN and it returns null for those properties
  var unixNatural = Date.parse(paramDateTime);
  if (!isNaN(unixNatural)) {
    result = JSON.stringify(parsetime(timeParsed, dateParsed))
  } else {
    result = JSON.stringify(parsetime(null, null));
  }
  
  response.send(result);

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
