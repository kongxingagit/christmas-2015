/*Remember

1. You must have a 10 k ohm resistor on the circuit or it explodes

2. you must have it connected to analog input pin and the otherside to 5 volt power*/

/*which pins are analog inputs
but basically 33, 35-40 of p9*/
var BeagleBone = require('beaglebone-io');

var five = require("johnny-five"),
  board, photoresistor;

var board = new five.Board({
    io: new BeagleBone()
});

board.on("ready", function() {

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "P9_40",
    freq: 250 /*how often it reads in*/
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    console.log(this.value);
  });
});
