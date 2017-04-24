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

var particles = [];

var flowfield;

var alph = 60;

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
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(0);
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
  fill(colors);
  level = amp.getLevel();
  level = map(level,0,1,0,500);
  ellipse(width / 2, height / 2, level, level);
 
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * QUARTER_PI * (i+1);
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

function keyPressed() {
  if (keyCode === 65) {
    colors = C;
    i = 0;
    if (switcher === true) {
      c.play();
    }
  } 
  if (keyCode === 87) {
    colors = CS;
    i = 1;
    num = 2;
    if (switcher === true) {
      cs.play();
    }
  }
  if (keyCode === 83) {
    colors = D;
    i = 2;
    num = 3;
    if (switcher === true) {
      d.play();
    }
  } 
  if (keyCode === 69) {
    colors = DS;
    i = 3;
    if (switcher === true) {
      eb.play();
    }
  } 
  if (keyCode === 68) {
    colors = E;
    i = 4;
    if (switcher === true) {
      e.play();
    }
  } 
  if (keyCode === 70) {
    colors = F;
    i = 5;
    if (switcher === true) {
      f.play();
    }
  } 
  if (keyCode === 84) {
    colors = FS;
        i = 6;
        if (switcher === true) {
      fs.play();
    }
  } 
  if (keyCode === 71) {
    colors = G;
       i = 7;
        if (switcher === true) {
      g.play();
    }
  } 
  if (keyCode === 89) {
    colors = GS;
        i = 8;
        if (switcher === true) {
      gs.play();
    }
  } 
  if (keyCode === 72) {
    colors = A;
        i = 9;
        if (switcher === true) {
      a.play();
    }
  } 
  if (keyCode === 85) {
    colors = Bb;
        i = 10;
        if (switcher === true) {
      bb.play();
    }
  } 
  if (keyCode === 74) {
    colors = B;
        i = 11;
        if (switcher === true) {
      b.play();
    }
  } 
  if (keyCode === 75) {
    colors = C1;
        i = 12;
      if (switcher === true) {
      c5.play();
    }
  } 
  if(key === ' '){
    background(0);
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
