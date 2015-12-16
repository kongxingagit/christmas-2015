var five = require("johnny-five");
var BeagleBone = require('beaglebone-io');

var board = new five.Board({
    io: new BeagleBone()
});

board.on("ready", function() {

  // Create a standard `piezo` instance on pin 3
  var piezo = new five.Piezo('P9_14');

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["A4", 1 / 4],
      [null, 1 / 4],
      ["A4", 1],
      ["G4", 1],
      [null, 1 / 2],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["G4", 1 / 4],
      [null, 1 / 4],
      ["G4", 1],
      ["F4", 1],
      [null, 1 / 2]
    ],
    tempo: 100
  });
  
  
  /*the ada fruit piezo has max current of 35 mA*/
  /*with 5 volts and I equals v over R*/
  /*need about 150 ohms so the 220 resistor is the best and is on that small pack*/
  console.log("Yall hear anything");
});