//=var lambL = [E, D, C, D, E, E, E, D, D, D, E, G, G, E, D, C, D, E, E, E, E, D, D, E, D, C];
var lamb = [46, 44, 42, 44, 46, 46, 46, 44, 44, 44, 46, 49, 49, 46, 44, 42, 44, 46, 46, 46, 46, 44, 44, 46, 44, 42];
var playing = [];

var serial;
var portName = 'COM5';
var inData = 0;

var font;

var i = 0;

var osc;
var switcher = false;
var notes = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];

var p1;
var p2;
var p3;
var p4;
var p27;
var p6;
var p7;
var p8;
var p9;
var p10;
var p11;
var p12;
var p13;
var p14;
var p15;
var p16;
var p17;
var p18;
var p19;
var p20;
var p21;
var p22;
var p23;
var p24;
var p25;
var p26;

var c;
var cs;
var d;
var eb;
var e;
var f;
var fs;
var g;
var gs;
var a;
var bb;
var b;
var c5;

var letter = " ";


function preload() {

  font = loadFont('KalamBold.ttf')
  c = loadSound('C.wav');
  cs = loadSound('Cs.wav');
  d = loadSound('D.wav');
  eb = loadSound('Eb.wav');
  e = loadSound('E.wav');
  f = loadSound('F.wav');
  fs = loadSound('Fs.wav');
  g = loadSound('G.wav');
  gs = loadSound('Gs.wav');
  a = loadSound('A.wav');
  bb = loadSound('Bb.wav');
  b = loadSound('B.wav');
  c5 = loadSound('C5.wav');

  p1 = loadImage('26.png');

  p2 = loadImage('25.png');

  p3 = loadImage('24.png');

  p4 = loadImage('23.png');

  p27 = loadImage('22.png');

  p6 = loadImage('21.png');

  p7 = loadImage('20.png');

  p8 = loadImage('19.png');

  p9 = loadImage('18.png');

  p10 = loadImage('17.png');

  p11 = loadImage('16.png');

  p12 = loadImage('15.png');

  p13 = loadImage('14.png');

  p14 = loadImage('13.png');

  p15 = loadImage('12.png');

  p16 = loadImage('11.png');

  p17 = loadImage('10.png');

  p18 = loadImage('9.png');

  p19 = loadImage('8.png');

  p20 = loadImage('7.png');

  p21 = loadImage('6.png');

  p22 = loadImage('5.png');

  p23 = loadImage('4.png');

  p24 = loadImage('3.png');

  p25 = loadImage('2.png');

  p26 = loadImage('1.png');



}

function setup() {
  /*
    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.on('list', printList); // set a callback function for the serialport list event
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen); // callback for the port opening
    serial.on('data', serialEvent); // callback for when new data arrives
    serial.on('error', serialError); // callback for errors
    serial.on('close', portClose); // callback for the port closing
    var options = {
    baudrate: 9600
  };
  */
  ellipseMode(CENTER);

  osc = new p5.Oscillator('Triangle');
  //serial.list(); // list the serial ports
  //serial.open(portName); // open a serial port
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

/*function serialEvent() {
  inData = serial.readStringUntil('\r\n');
  if (inData.length > 0) {
    inData = split(inData, ',');
  }
}*/

function draw() {
  background(80);
  ellipseMode(CORNER);
  if (playing.length === 1) {
    image(p1, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 2) {
    image(p2, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 3) {
    image(p3, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 4) {
    image(p4, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 5) {
    image(p27, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 6) {
    image(p6, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 6) {
    image(p6, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 7) {
    image(p7, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 8) {
    image(p8, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 9) {
    image(p9, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 10) {
    image(p10, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 11) {
    image(p11, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 12) {
    image(p12, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 13) {
    image(p13, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 14) {
    image(p14, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 15) {
    image(p15, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 16) {
    image(p16, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 17) {
    image(p17, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 18) {
    image(p18, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 19) {
    image(p19, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 20) {
    image(p20, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 21) {
    image(p21, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 22) {
    image(p22, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 23) {
    image(p23, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 24) {
    image(p24, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 25) {
    image(p25, (width / 2) - 150, (height / 2) - 100);
  } else if (playing.length === 26) {
    image(p26, (width / 2) - 150, (height / 2) - 100);
  }
  textFont(font);
  stroke(255);
  fill(255);
  textSize(50);
  text(letter, 10, 60);
  if (playing.length > 26) {
    playing.splice(0, 1);
  }
  print(playing);
  print(playing.length);
  for (var i = 0; i < playing.length; i++) {
    if (playing[i] !== lamb[i]) {
      playing.splice(0, 1);
    }
  }
}


function keyPressed() {
  if (keyCode === 65) {
    letter = "C";
    i = 0;
    if (switcher === true) {
      c.play();
    }
  }
  if (keyCode === 87) {
    letter = "C#";
    i = 1;
    if (switcher === true) {
      cs.play();
    }
  }
  if (keyCode === 83) {
    letter = "D";
    i = 2;
    if (switcher === true) {
      d.play();
    }
  }
  if (keyCode === 69) {
    letter = "Eb";
    i = 3;
    if (switcher === true) {
      eb.play();
    }
  }
  if (keyCode === 68) {
    letter = "E";
    i = 4;
    if (switcher === true) {
      e.play();
    }
  }
  if (keyCode === 70) {
    letter = "F";
    i = 5;
    if (switcher === true) {
      f.play();
    }
  }
  if (keyCode === 84) {
    letter = "F#";
    i = 6;
    if (switcher === true) {
      fs.play();
    }
  }
  if (keyCode === 71) {
    letter = "G";
    i = 7;
    if (switcher === true) {
      g.play();
    }
  }
  if (keyCode === 89) {
    letter = "G#";
    i = 8;
    if (switcher === true) {
      gs.play();
    }
  }
  if (keyCode === 72) {
    letter = "A";
    i = 9;
    if (switcher === true) {
      a.play();
    }
  }
  if (keyCode === 85) {
    letter = "Bb";
    i = 10;
    if (switcher === true) {
      bb.play();
    }
  }
  if (keyCode === 74) {
    letter = "B";
    i = 11;
    if (switcher === true) {
      b.play();
    }
  }
  if (keyCode === 75) {
    letter = "C5";
    i = 12;
    if (switcher === true) {
      c5.play();
    }
  }
  if (keyCode === ENTER || keyCode === RETURN) {
    if (switcher === false) {
      osc.amp(0, 0.5);
      switcher = true;

    } else {
      osc.amp(0.5, 0.05);
      switcher = false;
    }
  }

  osc.start(0, notes[i]);
  var freq = midiToFreq(notes[i]);
  osc.freq(freq);
  piano = false;
  playing.push(notes[i]);
  if (playing.length > 26) {
    splice(0, 1);
  }
}
/*
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}*/
