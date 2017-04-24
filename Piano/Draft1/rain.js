function Rain(i) {
  this.x = random(width);
  this.y = 0;
  this.gravity = 1;
  this.display = function() {
    if (i === 0) {
      fill(232, 12, 36, 30);
    } else if (i === 1) {
      fill(255, 75, 0, 30);
    } else if (i === 2) {
      fill(232, 146, 12, 30);
    } else if (i === 3) {
      fill(232, 179, 85, 30);
    } else if (i === 4) {
      fill(255, 226, 89, 30);
    } else if (i === 5) {
      fill(4, 135, 12, 30);
    } else if (i ===6) {
      fill(13, 83, 60, 30);
    } else if (i === 7) {
      fill(39, 69, 255, 30);
    } else if (i === 8) {
      fill(79, 74, 255, 30);
    } else if (i === 9) {
      fill(131, 100, 255, 30);
    } else if (i === 10) {
      fill(170, 53, 255, 30);
    } else if (i === 11) {
      fill(255, 67, 177, 30);
    } else if (i === 12) {
      fill(255, 0, 255, 30);
    }
    ellipse(this.x, this.y, 40, 40);
  }
  this.drop = function() {
    this.y += this.gravity;
  }
  this.SpeedUp = function() {
    this.gravity += 1;
  }
  this.update = function() {
    /*if (this.y > height) {
      this.y = 0;
      this.x = random(width);

    }*/
    this.y += this.gravity;

  }
}