let glassesOn = false;
let glassesY = 0;
let targetGlassesY = 195;

let originalBgColor;
let targetBgColor;
let animationProgress = 0;

let hearts = [];
const MAX_HEARTS = 10;

function setup() {
  createCanvas(600, 400);

  originalBgColor = color("#ffe5e5");
  targetBgColor = color("#e5f7ff");
}

function draw() {
  let targetProgress = glassesOn ? 1 : 0;
  animationProgress += (targetProgress - animationProgress) * 0.05;

  let currentBgColor = lerpColor(originalBgColor, targetBgColor, animationProgress);
  background(currentBgColor);

  if (glassesOn) {
    glassesY += (targetGlassesY - glassesY) * 0.1;
  } else {
    glassesY += (0 - glassesY) * 0.1;
  }

  fill("#ffffe5");
  rect(265, 280, 70, 90);
  fill("#b26666");
  rect(160, 355, 280, 80);
  fill("#ffffe5");
  arc(300, 355, 70, 60, 0, PI);

  noStroke();
  fill("#663300");
  arc(300, 200, 260, 300, PI, TWO_PI);
  rect(170, 200, 50, 180);
  rect(380, 200, 50, 180);

  fill("#ffffe5");
  ellipse(300, 220, 180, 230);

  noStroke();
  fill("#663300");
  arc(260, 160, 140, 250, PI, TWO_PI);
  arc(340, 160, 140, 250, PI, TWO_PI);
  fill("#ffffe5");
  ellipse(200, 200, 50, 60);
  ellipse(400, 200, 50, 60);

  noStroke();
  fill("#ffffe5");
  triangle(250, 120, 240, 180, 280, 200);
  triangle(320, 120, 310, 180, 340, 200);

  fill("#191919");
  ellipse(250, 200, 20, 30);
  fill(255);
  ellipse(248, 198, 5, 6);
  ellipse(254, 202, 6, 8);

  stroke("#191919");
  strokeWeight(5);
  noFill();
  arc(340, 200, 30, 10, 0, PI);

  strokeWeight(3);
  line(250, 190, 250, 177);
  line(244, 200, 240, 179);
  line(256, 190, 260, 179);
  line(340, 205, 340, 215);
  line(330, 205, 326, 213);
  line(350, 205, 354, 216);

  strokeWeight(3);
  stroke("#191919");
  line(298, 225, 290, 242);
  line(290, 242, 300, 242);

  noStroke();
  fill("#ff8080");
  arc(300, 270, 80, 90, 0, PI);

  drawGlasses();

  let blushAlpha = animationProgress * 255;
  noStroke();
  fill(255, 128, 128, blushAlpha);
  ellipse(260, 245, 30, 20);
  ellipse(340, 245, 30, 20);

  noStroke();
  fill("#ff80c0");
  triangle(300, 60, 240, 40, 240, 100);
  triangle(300, 60, 360, 40, 360, 100);

  if (glassesOn && frameCount % 10 == 0 && hearts.length < MAX_HEARTS) {
    let heartX = random(width / 2 - 150, width / 2 + 150);
    let heartY = random(height / 2 - 100, height / 2 + 100);
    hearts.push(new Heart(heartX, heartY, random(10, 25), color(255, 100, 100)));
  }

  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].update();
    hearts[i].display();
    if (hearts[i].isFinished()) {
      hearts.splice(i, 1);
    }
  }
}

function drawGlasses() {
  push();
  translate(0, glassesY - targetGlassesY);
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(215, 185, 70, 30, 10);
  rect(315, 185, 70, 30, 10);
  line(285, 200, 315, 200);
  pop();
}

function mousePressed() {
  glassesOn = !glassesOn;
}

class Heart {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alpha = 255;
    this.speed = random(0.5, 1.5);
    this.color = col;
    this.rotation = random(TWO_PI);
    this.rotationSpeed = random(-0.05, 0.05);
  }

  update() {
    this.y -= this.speed;
    this.alpha -= 5;
    this.rotation += this.rotationSpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);

    beginShape();
    vertex(0, 0.8 * this.size);
    bezierVertex(this.size, -0.2 * this.size, this.size * 0.5, -0.8 * this.size, 0, -0.4 * this.size);
    bezierVertex(-this.size * 0.5, -0.8 * this.size, -this.size, -0.2 * this.size, 0, 0.8 * this.size);
    endShape(CLOSE);

    pop();
  }

  isFinished() {
    return this.alpha < 0;
    
  }
}

function keyPressed() {
  if (key === 's') { 
    saveGif('myAnimation', 10);
  }
}