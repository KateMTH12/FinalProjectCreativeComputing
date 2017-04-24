function Block(i) {
  //this.x = 0;
  rectMode(CORNER);
  this.y1 = 0;
  this.y2 = 0;
  this.y3 = 0;
  this.y4 = 0;
  this.y5 = 0;
  this.y6 = 0;
  this.y7 = 0;
  this.y8 = 0;
  this.y9 = 0;
  this.y10 = 0;
  this.y11 = 0;
  this.y12 = 0;
  this.y13 = 0;

  //this.gravity = 5;

  /*this.y1Bottom = height - 10;
  this.y2Bottom = height - 10;
  this.y3Bottom = height - 10;
  this.y4Bottom = height - 10;
  this.y5Bottom = height - 10;
  this.y6Bottom = height - 10;
  this.y7Bottom = height - 10;
  this.y8Bottom = height - 10;
  this.y9Bottom = height - 10;
  this.y10Bottom = height - 10;
  this.y11Bottom = height - 10;
  this.y12Bottom = height - 10;
  this.y13Bottom = height - 10;
  */
  this.end = width-10;
  this.x = 0;

  this.display = function() {
    /*if (i === 0) {
      fill(232, 12, 36, 30);
      rect(0, this.y1, 2 * (width / 21), 10);
    } else if (i === 1) {
      fill(255, 75, 0, 30);
      rect(2 * (width / 21), this.y2, (width / 21), 10);
    } else if (i === 2) {
      fill(232, 146, 12, 30);
      rect(3 * (width / 21), this.y3, 2 * (width / 21), 10);
    } else if (i === 3) {
      fill(232, 179, 85, 30);
      rect(5 * (width / 21), this.y4, (width / 21), 10);
    } else if (i === 4) {
      fill(255, 226, 89, 30);
      rect(6 * (width / 21), this.y5, 2 * (width / 21), 10);
    } else if (i === 5) {
      fill(4, 135, 12, 30);
      rect(8 * (width / 21), this.y6, 2 * (width / 21), 10);
    } else if (i === 6) {
      fill(13, 83, 60, 30);
      rect(10 * (width / 21), this.y7, (width / 21), 10);
    } else if (i === 7) {
      fill(39, 69, 255, 30);
      rect(11 * (width / 21), this.y8, 2 * (width / 21), 10);
    } else if (i === 8) {
      fill(79, 74, 255, 30);
      rect(13 * (width / 21), this.y9, (width / 21), 10);
    } else if (i === 9) {
      fill(131, 100, 255, 30);
      rect(14 * (width / 21), this.y10, 2 * (width / 21), 10);
    } else if (i === 10) {
      fill(170, 53, 255, 30);
      rect(16 * (width / 21), this.y11, (width / 21), 10);
    } else
    if (i === 11) {
      fill(255, 67, 177, 30);
      rect(17 * (width / 21), this.y12, 2 * (width / 21), 10);
    } else if (i === 12) {
      fill(255, 0, 255, 30);
      rect(19 * (width / 21), this.y13, 2 * width, 10);
    }*/
    if (i === 0) {
      fill(232, 12, 36, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 1) {
      fill(255, 75, 0, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 2) {
      fill(232, 146, 12, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 3) {
      fill(232, 179, 85, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 4) {
      fill(255, 226, 89, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 5) {
      fill(4, 135, 12, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 6) {
      fill(13, 83, 60, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 7) {
      fill(39, 69, 255, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 8) {
      fill(79, 74, 255, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 9) {
      fill(131, 100, 255, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 10) {
      fill(170, 53, 255, 30);
      rect(this.x, 0, 20, height);
    } else
    if (i === 11) {
      fill(255, 67, 177, 30);
      rect(this.x, 0, 20, height);
    } else if (i === 12) {
      fill(255, 0, 255, 30);
      rect(this.x, 0, 20, height);
    }
  }

  this.stack = function() {
    /*
    if (i === 0) {
      this.y1Bottom -= 10;
    }
    if (i === 1) {
      this.y2Bottom -= 10;
    }
    if (i === 2) {
      this.y3Bottom -= 10;
    }
    if (i === 3) {
      this.y4Bottom -= 10;
    }
    if (i === 4) {
      this.y5Bottom -= 10;
    }
    if (i === 5) {
      this.y6Bottom -= 10;
    }
    if (i === 6) {
      this.y7Bottom -= 10;
    }
    if (i === 7) {
      this.y8Bottom -= 10;
    }
    if (i === 8) {
      this.y9Bottom -= 10;
    }
    if (i === 9) {
      this.y10Bottom -= 10;
    }
    if (i === 10) {
      this.y11Bottom -= 10;
    }
    if (i === 11) {
      this.y12Bottom -= 10;
    }
    if (i === 12) {
      this.y13Bottom -= 10;
    }*/
    this.end -= 20;
  }
  this.update = function() {
    /*if (this.y1 >= this.y1Bottom) {
      this.y1 = this.y1Bottom;
    } else {
      this.y1 += this.gravity;
    }

    if (this.y2 >= this.y2Bottom) {
      this.y2 = this.y2Bottom;

    } else {
      this.y2 += this.gravity;
    }

    if (this.y3 >= this.y3Bottom) {
      this.y3 = this.y3Bottom;

    } else {
      this.y3 += this.gravity;
    }

    if (this.y4 >= this.y4Bottom) {
      this.y4 = this.y4Bottom;
    } else {
      this.y4 += this.gravity;
    }

    if (this.y5 >= this.y5Bottom) {
      this.y5 = this.y5Bottom;
    } else {
      this.y5 += this.gravity;
    }

    if (this.y6 >= this.y6Bottom) {
      this.y6 = this.y6Bottom;
    } else {
      this.y6 += this.gravity;
    }

    if (this.y7 >= this.y7Bottom) {
      this.y7 = this.y7Bottom;
    } else {
      this.y7 += this.gravity;
    }

    if (this.y8 >= this.y8Bottom) {
      this.y8 = this.y8Bottom;
    } else {
      this.y8 += this.gravity;
    }

    if (this.y9 >= this.y9Bottom) {
      this.y9 = this.y9Bottom;
    } else {
      this.y9 += this.gravity;
    }

    if (this.y10 >= this.y10Bottom) {
      this.y10 = this.y10Bottom;
    } else {
      this.y10 += this.gravity;
    }

    if (this.y11 >= this.y11Bottom) {
      this.y11 = this.y11Bottom;
    } else {
      this.y11 += this.gravity;
    }

    if (this.y12 >= this.y12Bottom) {
      this.y12 = this.y12Bottom;
    } else {
      this.y12 += this.gravity;
    }

    if (this.y13 >= this.y13Bottom) {
      this.y13 = this.y13Bottom;
    } else {
      this.y13 += this.gravity;
    }*/
    if(this.x>= this.end){
      this.x = this.end;
    }else{
      this.x+=20;
    }
  }
}