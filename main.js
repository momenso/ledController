var Gpio = require('onoff').Gpio, // Constructor function for Gpio objects.
	leds = [
		new Gpio(17, 'out'),
		new Gpio(4, 'out')
	];

var express = require('express')
var app = express()

app.use('/', express.static(__dirname + '/public'));

app.get('/led/:number', function (req, res) {
	var ledNumber = req.params.number;
	console.log('led: '+ledNumber);
	leds[ledNumber].writeSync(leds[ledNumber].readSync() === 0 ? 1 : 0);
  res.send('led: '+ledNumber);
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})