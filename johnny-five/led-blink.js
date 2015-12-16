var five = require('johnny-five');
var BeagleBone = require('beaglebone-io');

var board = new five.Board({
    io: new BeagleBone()
});

board.on('ready', function () {
    // connect a Led on pin P9_14 of the beaglebone
    var led = new five.Led('P9_14');
    led.blink(1000);
    // this allows access to the led while the program is running
    this.repl.inject({ led: led });
    console.log("led should be blinking");
});