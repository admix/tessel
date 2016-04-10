// Import the interface to Tessel hardware
var tessel = require('tessel');
var http = require('http');

var options = {
  host: 'www.google.ca',
  path: '/search?q=hello'
};


callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();

//
// // Turn one of the LEDs on to start.
// tessel.led[2].on();
//
// // Blink!
// setInterval(function () {
//   tessel.led[1].toggle();
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
//   // tessel.led[4].toggle();
// }, 100);

console.log("I'm blinking! (Press CTRL + C to stop)");
