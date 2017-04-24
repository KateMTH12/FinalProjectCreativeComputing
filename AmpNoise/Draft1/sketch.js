// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

/* The majority of this code is taken from the video, I had originally wanted to use the noise
to sort of outline things or change the line color with each note. But I got it working to change
one strand or change all at the same rate so I reworked the idea.
*/
var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var num;

var particles = [];

var flowfield;

var alph = 60;

var h = 0;

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

var font;
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

var amp;
var osc;
var switcher = false;
var piano = false;
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

var level = 0;

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
}

function setup() {
  osc = new p5.Oscillator('Triangle');
  createCanvas(800, 800);
  //colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(51);
  noCursor();

  amp = new p5.Amplitude();

  C = color(232, 12, 36, alph);
  CS = color(255, 75, 0, alph);
  D = color(232, 146, 12, alph);
  DS = color(232, 179, 85, alph);
  E = color(255, 226, 89, alph);
  F = color(4, 135, 12, alph);
  FS = color(13, 83, 60, alph);
  G = color(39, 69, 255, alph);
  GS = color(79, 74, 255, alph);
  A = color(131, 100, 255, alph);
  Bb = color(170, 53, 255, alph);
  B = color(255, 67, 177, alph);
  C1 = color(255, 0, 255, alph);
  colors = C;

}

function draw() {
  fill(51);
  noStroke();

  textFont(font);
  strokeWeight(3);
  fill(colors);
  stroke(colors);
  textSize(400);
  level = amp.getLevel();
  level = map(level, 0, 1, 0, 500);
  ellipse(width / 2, height / 2, level, level);
  h = (height / 2) + 180;
  /*
  if (note1 === true) {
    Word(letter, h);
  } else if (note2 === true) {
    h = (height / 2 + 80);
    textSize(200);
    Word(letter, h);
  } else if (note3 === true) {
    Word(letter, h);
  } else if (note4 === true) {
    h = (height / 2 + 80);
    textSize(200);
    Word(letter, h);
  } else if (note5 === true) {
    Word(letter, h);
  } else if (note6 === true) {
    Word(letter, h);
  } else if (note7 === true) {
    h = (height / 2 + 80);
    textSize(200);
    Word(letter, h);
  } else if (note8 === true) {
    textSize(300);
    h = height/2 + 80;
    Word(letter, h);
  } else if (note9 === true) {
    h = (height / 2 + 80);
    textSize(200);
    Word(letter, h);
  } else if (note10 === true) {
    Word(letter, h);
  } else if (note11 === true) {
    h = (height / 2 + 80);
    textSize(200);
    Word(letter, h);
  } else if (note12 === true) {
    Word(letter, h);
  } else if (note13 === true) {
    h = (height / 2 + 80);
    textSize(200);
    Word(letter, h);
  }*/

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * QUARTER_PI * num;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

function Word(letter, h) {
  text(letter, (width / 2) - (textWidth(letter) / 2), h);
}

function keyPressed() {
  if (keyCode === 65) {
    colors = C;
    letter = "C";
    x = random((width / 8));
    y = random((height / 3), height);
    i = 0;
    num = 1;
    note1 = true;
    if (switcher === true) {
      c.play();
    }
  } else {
    note1 = false;
  }
  if (keyCode === 87) {
    colors = CS;
    letter = "C#";
    x = random(width / 5);
    y = random((height / 3));
    i = 1;
    num = 2;
    note2 = true
    if (switcher === true) {
      cs.play();
    }
  } else {
    note2 = false;
  }
  if (keyCode === 83) {
    colors = D;
    letter = "D";
    x = random((width / 8), 2 * (width / 7));
    y = random(height / 3);
    i = 2;
    num = 3;
    note3 = true;
    if (switcher === true) {
      d.play();
    }
  } else {
    note3 = false;
  }
  if (keyCode === 69) {
    colors = DS;
    letter = "Eb";
    x = random((width / 5), 2 * (width / 5));
    y = random((height / 3));
    i = 3;
    num = 4;
    note4 = true;
    if (switcher === true) {
      eb.play();
    }
  } else {
    note4 = false;
  }
  if (keyCode === 68) {
    colors = E;
    letter = "E";
    x = random(2 * (width / 8), 3 * (width / 7));
    y = random((height / 3), height);
    i = 4;
    num = 5;
    note5 = true;
    if (switcher === true) {
      e.play();
    }
  } else {
    note5 = false;
  }
  if (keyCode === 70) {
    colors = F;
    letter = "F";
    x = random(3 * (width / 8), 4 * (width / 7));
    y = random((height / 3), height);
    i = 5;
    num = 6;
    note6 = true;
    if (switcher === true) {
      f.play();
    }
  } else {
    note6 = false;
  }
  if (keyCode === 84) {
    colors = FS;
    letter = "F#";
    x = random(2 * (width / 5), 3 * (width / 5));
    y = random((height / 3));
    i = 6;
    num = 7;
    note7 = true;
    if (switcher === true) {
      fs.play();
    }
  } else {
    note7 = false;
  }
  if (keyCode === 71) {
    colors = G;
    letter = "G";
    x = random(4 * (width / 8), 5 * (width / 7));
    y = random((height / 3), height);
    i = 7;
    num = 8;
    note8 = true;
    if (switcher === true) {
      g.play();
    }
  } else {
    note8 = false;
  }
  if (keyCode === 89) {
    colors = GS;
    letter = "G#";
    x = random(3 * (width / 5), 4 * (width / 5));
    y = random((height / 3));
    i = 8;
    num = 9;
    note9 = false;
    if (switcher === true) {
      gs.play();
    }
  } else {
    note9 = false;
  }
  if (keyCode === 72) {
    colors = A;
    letter = "A";
    x = random(5 * (width / 8), 6 * (width / 7));
    y = random((height / 3), height);
    i = 9;
    num = 10;
    note10 = true;
    if (switcher === true) {
      a.play();
    }
  } else {
    note10 = false;
  }
  if (keyCode === 85) {
    colors = Bb;
    letter = "Bb";
    x = random(4 * (width / 5), width);
    y = random((height / 3));
    i = 10;
    num = 11;
    note11 = true;
    if (switcher === true) {
      bb.play();
    }
  } else {
    note11 = false;
  }
  if (keyCode === 74) {
    colors = B;
    letter = "B";
    x = random(6 * (width / 8), 7 * (width / 8));
    y = random((height / 3), height);
    i = 11;
    num = 12;
    note12 = true;
    if (switcher === true) {
      b.play();
    }
  } else {
    note12 = false;
  }
  if (keyCode === 75) {
    colors = C1;
    letter = "C5";
    x = random(7 * (width / 8), width);
    y = random((height / 3), height);
    i = 12;
    num = 13;
    note13 = false;
    if (switcher === true) {
      c5.play();
    }
  } else {
    note13 = false;
  }
  if (key === ' ') {
    background(51);
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
  osc.start(1, notes[i]);
  var freq = midiToFreq(notes[i]);
  osc.freq(freq);
  piano = false;
}
