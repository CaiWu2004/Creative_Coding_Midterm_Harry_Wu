let mirrors = [];
var option;
let Ahah;
let Joker;
let Star;
let Multiply;
let progress = 0;
var ball = {
  x: 300,
  y: 200,
  xspeed: 64,
  yspeed: 16,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
  r = 400 / 2;
  z = 200 / 2;
  // mask
  Ahah = new mask(x, y);
  //mask 2
  Joker = new mask(x, y);
  // mask 3
  Star = new mask(x, y);
  //mask 4
  Multiply = new mask(x, y);
  // mirror in option 0(default)
  mirrors[0] = new mirror(x, y, z, r);
  // allow for switching slides
  option = 0;
}

function draw() {
  normalVision();
  changingSlides();
}

function changingSlides() {
  if (option == 0) {
    basketball01();
    mirrors[0].show();
    background(218, 222, 255, 40);
  } else if (option == 1) {
    nightmareVoid();
  } else if (option == 2) {
    nightmareVoid();
    //background(224, 74, 60, 80);
    Joker.cryingMask();
    Joker.run2();
  } else if (option == 3) {
    nightmareVoid();
    Joker.cryingMask();
    Joker.run2();
    Star.faceless();
    Star.move();
  } else if (option == 4) {
    nightmareVoid();
    Joker.cryingMask();
    Joker.run2();
    Star.faceless();
    Star.move();
    Multiply.cannonfodder();
    Multiply.loc();
  } else if (option == 5) {
    nightmareVoid();
    Joker.cryingMask();
    Joker.run2();
    Star.faceless();
    Star.move();
    Multiply.cannonfodder();
    Multiply.loc();
    Multiply.cannonfodder();
    Multiply.loc2();
  } else if (option == 6) {
    nightmareVoid();
    Joker.cryingMask();
    Joker.run2();
    Star.faceless();
    Star.move();
    Multiply.cannonfodder();
    Multiply.loc();
    Multiply.cannonfodder();
    Multiply.loc2();
    // background(224, 74, 60, 80);
    progress += 1;
    let limit = (progress / (width * 2)) * width;
    for (let x = 0; x < limit; x += 1) {
      stroke(224, 74, 60, 40);
      line(x, 0, x, height);
    }
  } else if (option == 7) {
    basketball01();
    mirrors[0].show();
    background(224, 74, 60, 80);
  } else if (option == 8) {
    basketball();
  } else if (option == 9) {
    angryVision();
    background(224, 74, 60, 80);
    progress += 1;
    let limit = (progress / (width * 2)) * width;
    for (let x = 0; x < limit; x += 1) {
      strokeWeight(10);
      stroke(255, 255, 255, 20);
      line(x, 0, x, height);
    }
  }
}

function angryVision() {
  normalVision2();
  stroke(0);
  strokeWeight(3);
  line(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 + 25,
    windowHeight / 2 + 30
  );
  line(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2,
    windowHeight / 2 - 50
  );
  line(
    windowWidth / 2,
    windowHeight / 2 - 50,
    windowWidth / 2 - 30,
    windowHeight / 2 - 100
  );
  line(
    windowWidth / 2,
    windowHeight / 2 - 50,
    windowWidth / 2 - 35,
    windowHeight / 2 + 20
  );
  line(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 10,
    windowHeight / 2 - 10
  );
  line(
    windowWidth / 2,
    windowHeight / 2 - 50,
    windowWidth / 2 + 40,
    windowHeight / 2 - 50
  );
  line(
    windowWidth / 2 + 40,
    windowHeight / 2 - 50,
    windowWidth / 2 + 40,
    windowHeight / 2 - 32
  );
}
// second screen
function nightmareVoid() {
  background(0);
  // mask1
  Ahah.display();
  Ahah.run();
  // mask2
  // Joker.cryingMask();
  // Joker.run2();
  // mask3
  // Star.faceless();
  // Star.move();
  // mask 4
  // Multiply.cannonfodder();
  // Multiply.loc();
  // Multiply.cannonfodder();
  // Multiply.loc2();
}

class mask {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // mask one
  display() {
    stroke(255);
    strokeWeight(3);
    fill(125);
    ellipse(this.x, this.y - 10, (r * 2.5) / 2, r * 1.5);
    fill(0);
    ellipse(this.x, this.y - 10, r / 4);
    ellipse(this.x, this.y + 80, r, r / 4);
    rect(this.x - 90, this.y - 90, r / 4);
    rect(this.x + 40, this.y - 90, r / 4);
    // reset the this.y value after it reaches the max creating movement
    if (this.y > height) {
      this.y = 40;
    }
  }

  // mask 2
  cryingMask() {
    stroke(255);
    strokeWeight(3);
    fill(125);
    ellipse(this.x, this.y - 10, (r * 2.5) / 2, r * 1.5);
    fill(0);
    ellipse(this.x, this.y - 10, r / 4);
    ellipse(this.x, this.y + 90, r / 2);
    rect(this.x - 90, this.y - 80, r / 2 - 50, r / 6);
    rect(this.x + 40, this.y - 80, r / 2 - 50, r / 6);
    strokeWeight(3);
    fill(255, 0, 0);
    ellipse(this.x - 60, this.y - 30, r / 10);
    ellipse(this.x - 60, this.y - 10, r / 8);
    ellipse(this.x - 60, this.y + 10, r / 6);

    if (this.x > width) {
      this.x = 0;
    }
  }

  // mask 3
  faceless() {
    stroke(255);
    strokeWeight(3);
    fill(125);
    ellipse(this.x, this.y - 10, (r * 2.5) / 2, r * 1.5);
    noStroke();
    fill(0);
    ellipse(this.x, this.y - 10, r / 4);
    //star eyes on the left
    triangle(
      this.x - 170 / 2,
      this.y - 180 / 2,
      this.x - 110 / 2,
      this.y - 80 / 2,
      this.x - 50 / 2,
      this.y - 180 / 2
    );
    triangle(
      this.x - 170 / 2,
      this.y - 100 / 2,
      this.x - 50 / 2,
      this.y - 100 / 2,
      this.x - 110 / 2,
      this.y - 200 / 2
    );
    //star eye on the right
    triangle(
      this.x + 170 / 2,
      this.y - 180 / 2,
      this.x + 110 / 2,
      this.y - 80 / 2,
      this.x + 50 / 2,
      this.y - 180 / 2
    );
    triangle(
      this.x + 170 / 2,
      this.y - 100 / 2,
      this.x + 50 / 2,
      this.y - 100 / 2,
      this.x + 110 / 2,
      this.y - 200 / 2
    );

    // arc(this.x, this.y + 50, 90, 90, 0, QUARTER_PI + PI, PIE, 5);
    ellipse(this.x, this.y + 80, 90, 90);
    fill(125);
    ellipse(this.x, this.y + 70, 80, 80);
  }

  // mask 4-...
  cannonfodder() {
    stroke(255);
    strokeWeight(3);
    fill(125);
    ellipse(this.x, this.y - 10, (r * 2.5) / 2, r * 1.5);
    fill(0);
    ellipse(this.x, this.y - 10, r / 4);
    noStroke();
    ellipse(this.x, this.y + 80, r / 2, r / 4);
    ellipse(this.x + 60, this.y + 80, r / 4);
    ellipse(this.x - 60, this.y + 80, r / 4);
    stroke(255);
    rect(this.x - 80, this.y - 80, r / 2 - 50, r / 6);
    rect(this.x + 40, this.y - 80, r / 2 - 50, r / 6);
    // fill(135, 206, 235);
    // ellipse(this.x - 55, this.y - 40, r / 15);
    // ellipse(this.x - 55, this.y - 25, r / 8);
    // ellipse(this.x - 55, this.y - 10, r / 6, r / 8);
    fill(125);
    ellipse(this.x - 140, this.y + 50, r / 2);
    ellipse(this.x - 180, this.y + 50, r / 4);

    if (this.y > height) {
      this.y = 40;
    }
  }
  // Increase the this.y value over time
  run() {
    this.y = this.y + 4;
  }

  run2() {
    this.x = this.x + 4;
  }
  // change the position of still object
  move() {
    this.y = 300;
    this.x = 500;
  }

  loc() {
    this.x = windowWidth - 300;
    this.y = windowHeight / 1.5 - 400;
  }

  loc2() {
    this.x = windowWidth / 8;
    this.y = windowHeight / 1.5 + 100;
  }
}

// First Screen: default
//when the basketball is still
function basketball01() {
  normalVision();
  stroke(0);
  strokeWeight(3);
  fill(224, 99, 18);
  ellipse(windowWidth / 2 - 200, windowHeight / 2 + 200, 125, 125);
}

// Array for mirror
class mirror {
  constructor(x, y, r, z) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.z = z;
  }

  show() {
    stroke(0);
    strokeWeight(10);
    fill(128);
    ellipse(this.x, this.y - 50, this.r, this.z);
  }
}
// basketball moving/thrown
function basketball() {
  normalVision();
  background(224, 74, 60, 80);
  //drawing the ball
  stroke(0);
  strokeWeight(4);
  fill(224, 99, 18);
  ellipse(ball.x, ball.y, 125, 125);
  //move function
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > windowHeight / 2 + 200 || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
  //bounce function
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

//Background setting(house)
function normalVision() {
  background(114, 209, 240, 94);
  noStroke();
  fill(139, 90, 43);
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 + 100,
    windowHeight / 2 + 100
  );
  rect(
    windowWidth / 2 - windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2,
    windowHeight / 2 + 100
  );
  triangle(
    windowWidth / 2 + 320,
    windowHeight / 2,
    windowWidth / 2 + 320,
    windowHeight,
    windowWidth + 2000,
    windowHeight
  );
  triangle(
    windowWidth / 2 - 320,
    windowHeight / 2,
    windowWidth / 2 - 320,
    windowHeight,
    0 - 2000,
    windowHeight
  );
  rect(windowWidth / 2 - 320, windowHeight / 2, 640, windowHeight);
  stroke(0);
  strokeWeight(3);
  line(windowWidth / 2 - 320, windowHeight / 2, windowWidth / 2 - 320, 0);
  line(windowWidth / 2 + 320, windowHeight / 2, windowWidth / 2 + 320, 0);

  stroke(0);
  strokeWeight(2);
  fill(255);
  quad(
    windowWidth / 2 - 320,
    windowHeight / 2,
    windowWidth / 2 - windowWidth / 2,
    windowHeight / 2 + 80,
    0,
    0,
    windowWidth / 2 - 320,
    0
  );
  quad(
    windowWidth / 2 + 320,
    windowHeight / 2,
    windowWidth / 2 + windowWidth / 2,
    windowHeight / 2 + 80,
    windowWidth,
    0,
    windowWidth / 2 + 320,
    0
  );
  quad(
    windowWidth / 2 - 320,
    windowHeight / 2,
    windowWidth / 2 + 320,
    windowHeight / 2,
    windowWidth / 2 + 320,
    0,
    windowWidth / 2 - 320,
    0
  );

  stroke(0);
  strokeWeight(10);
  line(windowWidth / 2, 0, windowWidth / 2, 70);

  fill(224, 206, 26, 88);
  ellipse(windowWidth / 2, 90, 50, 50);
  noStroke();
  fill(224, 206, 26, 88);
  ellipse(windowWidth / 2, 90, 80, 80);

  stroke(0);
  strokeWeight(10);
  fill(0);
  ellipse(windowWidth / 2, 70, 100, 50);

  mirrors[0].show();
}
// last scene
function normalVision2() {
  background(114, 209, 240, 94);
  noStroke();
  fill(139, 90, 43);
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 + 100,
    windowHeight / 2 + 100
  );
  rect(
    windowWidth / 2 - windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2,
    windowHeight / 2 + 100
  );
  triangle(
    windowWidth / 2 + 320,
    windowHeight / 2,
    windowWidth / 2 + 320,
    windowHeight,
    windowWidth + 2000,
    windowHeight
  );
  triangle(
    windowWidth / 2 - 320,
    windowHeight / 2,
    windowWidth / 2 - 320,
    windowHeight,
    0 - 2000,
    windowHeight
  );
  rect(windowWidth / 2 - 320, windowHeight / 2, 640, windowHeight);
  stroke(0);
  strokeWeight(3);
  line(windowWidth / 2 - 320, windowHeight / 2, windowWidth / 2 - 320, 0);
  line(windowWidth / 2 + 320, windowHeight / 2, windowWidth / 2 + 320, 0);

  stroke(0);
  strokeWeight(2);
  fill(255);
  quad(
    windowWidth / 2 - 320,
    windowHeight / 2,
    windowWidth / 2 - windowWidth / 2,
    windowHeight / 2 + 80,
    0,
    0,
    windowWidth / 2 - 320,
    0
  );
  quad(
    windowWidth / 2 + 320,
    windowHeight / 2,
    windowWidth / 2 + windowWidth / 2,
    windowHeight / 2 + 80,
    windowWidth,
    0,
    windowWidth / 2 + 320,
    0
  );
  quad(
    windowWidth / 2 - 320,
    windowHeight / 2,
    windowWidth / 2 + 320,
    windowHeight / 2,
    windowWidth / 2 + 320,
    0,
    windowWidth / 2 - 320,
    0
  );

  stroke(0);
  strokeWeight(5);
  fill(135, 206, 235);
  ellipse(windowWidth / 2, windowHeight / 2 - 220, 200, 200);
  fill(251, 208, 38);
  ellipse(windowWidth / 2, windowHeight / 2 - 270, 100, 100);
  fill(224, 99, 18);
  ellipse(windowWidth / 2, windowHeight / 2 - 270, 20, 20);

  stroke(0);
  strokeWeight(10);
  line(windowWidth / 2, 0, windowWidth / 2, 70);

  fill(224, 206, 26, 88);
  ellipse(windowWidth / 2, 90, 50, 50);
  noStroke();
  fill(224, 206, 26, 88);
  ellipse(windowWidth / 2, 90, 80, 80);

  stroke(0);
  strokeWeight(10);
  fill(0);
  ellipse(windowWidth / 2, 70, 100, 50);

  mirrors[0].show();
  // trial
}

//getting the slides to change from normal vision to anger vision
function mousePressed() {
  if (option > 8) {
    option = 0;
  } else {
    option++;
  }
}
