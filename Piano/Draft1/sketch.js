//    <script src="libraries/p5.serialport.js" type="text/javascript"></script>

var serial;
var portName = 'COM5';
var inData = 0;
var C;
var CS;
var D;
var DS;
var E;
var F;
var FS;
var G;
var GS;
var A;
var Bb;
var B;
var C1;
var mX = 0;
var mY = 0;
var r = 5;
var grow = false;
var rate = 5;
var num = 0;
var n = 0;
var i = 0;
var t = 25;
var osc;
var switcher = false;
var notes = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

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

var x;
var y;
var colors;

var note1 = false;
var note2 = false;
var note3 = false;
var note4 = false;
var note5 = false;
var note6 = false;
var note7 = false;
var note8 = false;
var note9 = false;
var note10 = false;
var note11 = false;
var note12 = false;
var note13 = false;

var raindrops = [];
var blocks = [];
/*var blocks1 = [];
var blocks2 = [];
var blocks3 = [];
var blocks4 = [];
var blocks5 = [];
var blocks6 = [];
var blocks7 = [];
var blocks8 = [];
var blocks9 = [];
var blocks10 = [];
var blocks11 = [];
var blocks12 = [];
*/
function preload() {
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
}

function setup() {
  /*serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing
*/
  ellipseMode(CENTER);
  var options = {
    baudrate: 9600
  };
  osc = new p5.Oscillator('Triangle');
  //serial.list(); // list the serial ports
  //serial.open(portName); // open a serial port
  createCanvas(windowWidth, windowHeight);
  noCursor();

  C = color(232, 12, 36, 30);
  CS = color(255, 75, 0, 30);
  D = color(232, 146, 12, 30);
  DS = color(232, 179, 85, 30);
  E = color(255, 226, 89, 30);
  F = color(4, 135, 12, 30);
  FS = color(13, 83, 60, 30);
  G = color(39, 69, 255, 30);
  GS = color(79, 74, 255, 30);
  A = color(131, 100, 255, 30);
  Bb = color(170, 53, 255, 30);
  B = color(255, 67, 177, 30);
  C1 = color(255, 0, 255, 30);
  colors = C;

  setInterval(randomize, 5000);
}

function serialEvent() {
  inData = Number(serial.read());
}

function randomize() {
  mX = random(width);
  mY = random(height);
}

function draw() {

  n += .001;
  background(255);
  /*var x;
  var y;
  x = map(mouseX,0,width,0,255);
  y = map(mouseY,0,height,0,255);*/
  //noFill();
  //mX = random(mouseX);
  //mY = random(mouseY);
  //ellipse(mX, mY, 20, 20);
  noFill();
  ellipse(mX, mY, r, r);
  fill(colors);
  ellipse(x, y, num, num);
  if (grow === true) {
    r += rate;
    if (r >= 200) {
      rate = -rate;
    }
    if (r <= 5) {
      rate = abs(rate);
    }
  }

  num = noise(n) * (width / 5);
  //fill(255, 0, 0);
  //rect(mouseX, 0, num, height);
  for (var k = 0; k < raindrops.length; k++) {
    raindrops[k].update();
    raindrops[k].display();
    //raindrops[i].drop();
  }
  for (var j = 0; j < blocks.length; j++) {
    blocks[j].update();
    blocks[j].display();
  }
  /*
  for (var j1 = 0; j1 < blocks1.length; j1++) {
    blocks1[j1].update();
    blocks1[j1].display();
    //raindrops[i].drop();
  }
  for (var j2 = 0; j2 < blocks2.length; j2++) {
    blocks2[j2].update();
    blocks2[j2].display();
    //raindrops[i].drop();
  }
  for (var j3 = 0; j3 < blocks3.length; j3++) {
    blocks3[j3].update();
    blocks3[j3].display();
    //raindrops[i].drop();
  }
  for (var j4 = 0; j4 < blocks4.length; j4++) {
    blocks4[j].update();
    blocks4[j].display();
    //raindrops[i].drop();
  }
  for (var j5 = 0; j5 < blocks5.length; j5++) {
    blocks5[j].update();
    blocks5[j].display();
    //raindrops[i].drop();
  }
  for (var j6 = 0; j6 < blocks6.length; j6++) {
    blocks6[j6].update();
    blocks6[j6].display();
    //raindrops[i].drop();
  }
  for (var j7 = 0; j7 < blocks7.length; j7++) {
    blocks7[j7].update();
    blocks7[j7].display();
    //raindrops[i].drop();
  }
  for (var j8 = 0; j8 < blocks8.length; j8++) {
    blocks8[j8].update();
    blocks8[j8].display();
    //raindrops[i].drop();
  }
  for (var j9 = 0; j9 < blocks9.length; j9++) {
    blocks9[j9].update();
    blocks9[j9].display();
    //raindrops[i].drop();
  }
  for (var j10 = 0; j10 < blocks10.length; j10++) {
    blocks10[j10].update();
    blocks10[j10].display();
    //raindrops[i].drop();
  }
  for (var j11 = 0; j11 < blocks11.length; j11++) {
    blocks11[j11].update();
    blocks11[j11].display();
    //raindrops[i].drop();
  }
  for (var j12 = 0; j12 < blocks12.length; j12++) {
    blocks12[j12].update();
    blocks12[j12].display();
    //raindrops[i].drop();
  }
  */
}

function mousePressed() {
  if (grow === false) {
    grow = true;
  } else {
    grow = false;
  }
}

function keyPressed() {
  if (keyCode === 65) {
    colors = C;
    x = random((width / 8));
    y = random((height / 3), height);
    i = 0;
    //blocks.push(new Block(i));
    if (switcher === true) {
      c.play();
    }
  }
  if (keyCode === 87) {
    colors = CS;
    x = random(width / 5);
    y = random((height / 3));
    i = 1;
    //blocks1.push(new Block(i));
    if (switcher === true) {
      cs.play();
    }
  }
  if (keyCode === 83) {
    colors = D;
    x = random((width / 8), 2 * (width / 7));
    y = random(height / 3);
    i = 2;
    //blocks2.push(new Block(i));
    if (switcher === true) {
      d.play();
    }
  }
  if (keyCode === 69) {
    colors = DS;
    x = random((width / 5), 2 * (width / 5));
    y = random((height / 3));
    i = 3;
    //blocks3.push(new Block(i));
    if (switcher === true) {
      eb.play();
    }
  }
  if (keyCode === 68) {
    colors = E;
    x = random(2 * (width / 8), 3 * (width / 7));
    y = random((height / 3), height);
    i = 4;
    //blocks4.push(new Block(i));
    if (switcher === true) {
      e.play();
    }
  }
  if (keyCode === 70) {
    colors = F;
    x = random(3 * (width / 8), 4 * (width / 7));
    y = random((height / 3), height);
    i = 5;
    //blocks5.push(new Block(i));
    if (switcher === true) {
      f.play();
    }
  }
  if (keyCode === 84) {
    colors = FS;
    x = random(2 * (width / 5), 3 * (width / 5));
    y = random((height / 3));
    i = 6;
    //blocks6.push(new Block(i));
    if (switcher === true) {
      fs.play();
    }
  }
  if (keyCode === 71) {
    colors = G;
    x = random(4 * (width / 8), 5 * (width / 7));
    y = random((height / 3), height);
    i = 7;
    //blocks7.push(new Block(i));
    if (switcher === true) {
      g.play();
    }
  }
  if (keyCode === 89) {
    colors = GS;
    x = random(3 * (width / 5), 4 * (width / 5));
    y = random((height / 3));
    i = 8;
    //blocks8.push(new Block(i));
    if (switcher === true) {
      gs.play();
    }
  }
  if (keyCode === 72) {
    colors = A;
    x = random(5 * (width / 8), 6 * (width / 7));
    y = random((height / 3), height);
    i = 9;
    //blocks9.push(new Block(i));
    if (switcher === true) {
      a.play();
    }
  }
  if (keyCode === 85) {
    colors = Bb;
    x = random(4 * (width / 5), width);
    y = random((height / 3));
    i = 10;
    //blocks10.push(new Block(i));
    if (switcher === true) {
      bb.play();
    }
  }
  if (keyCode === 74) {
    colors = B;
    x = random(6 * (width / 8), 7 * (width / 8));
    y = random((height / 3), height);
    i = 11;
    //blocks11.push(new Block(i));
    if (switcher === true) {
      b.play();
    }
  }
  if (keyCode === 75) {
    colors = C1;
    x = random(7 * (width / 8), width);
    y = random((height / 3), height);
    i = 12;
    //blocks12.push(new Block(i));
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
  raindrops.push(new Rain(i));
  osc.start();
  var freq = midiToFreq(notes[i]);
  osc.freq(freq);
  piano = false;
  blocks.push(new Block(i));
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
