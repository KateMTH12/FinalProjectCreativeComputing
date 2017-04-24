// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

function Particle() {
  this.w = 200;
  this.a = 30;
  this.l = 1;
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.i = 0;
  this.prevPos = this.pos.copy();
  setInterval(5000, this.chameleon);
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.chameleon = function() {
    this.i = this.i + 1;
    if (this.i > 12) {
      this.i = 0;
    }
    this.w = 200;
    this.w += 5;
    if (this.w > 255) {
      this.w = 200;
    }
    this.a = 30;
    this.a += 10;
    if (this.a < 30) {
      this.a = 30;
    }
    this.l = 1;
    this.l += .5;
    if (this.l > 2) {
      l = 1;
    }
  }

  this.show = function() {
    /*
    if (this.i === 0) {
      stroke(232, 12, 36, 60);
    } else if (this.i === 1) {
      stroke(255, 75, 0, 60);
    } else if (this.i === 2) {
      stroke(232, 146, 12, 60);
    } else if (this.i === 3) {
      stroke(232, 179, 85, 60);
    } else if (this.i === 4) {
      stroke(255, 226, 89, 60);
    } else if (this.i === 5) {
      stroke(4, 135, 12, 60);
    } else if (this.i === 6) {
      stroke(13, 83, 60, 60);
    } else if (this.i === 7) {
      stroke(39, 69, 255, 60);
    } else if (this.i === 8) {
      stroke(79, 74, 255, 60);
    } else if (this.i === 9) {
      stroke(131, 100, 255, 60);
    } else if (this.i === 10) {
      stroke(170, 53, 255, 60);
    } else if (this.i === 11) {
      stroke(255, 67, 177, 60);
    } else if (this.i === 12) {
      stroke(255, 0, 255, 60);
    }
    this.chameleon();
 */

    stroke(this.w, this.w, this.w, this.a);
    strokeWeight(this.l);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  this.avoid = function() {
    this.vel.mult(-1);
  }
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
    /*if (abs(dist(this.pos.x, this.pos.y, mouseX,mouseY)) < 200) {
      this.avoid();
    }*/
  }

}