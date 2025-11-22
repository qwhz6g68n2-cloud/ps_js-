let c1, c2;

function setup() {
  createCanvas(300, 200); 
  
  c1 = color('#ffffe5');
  c2 = color('#e5ffff');
  
  saveGif('myAnimation.gif', 10); 
}

function draw() {
  let amt = (sin(frameCount * 0.02) + 1) / 2;
  let bgColor = lerpColor(c1, c2, amt);
  background(bgColor);
  
  stroke('#c00060');
  strokeWeight(10);
  let lineMoveX = cos(frameCount * 0.05) * 20;
  let lineMoveY = sin(frameCount * 0.05) * 20;
  line(width, height, (width / 1.5) + lineMoveX, (height / 1.81) + lineMoveY); 
  line(width, 0, (width / 1.5) - lineMoveX, (height / 2.22) - lineMoveY); 
  
  stroke('#800000');
  strokeWeight(15);
  line(width / 12, height / 4.44, width / 3.33, height / 1.33); 
  
  stroke('#80c0ff');
  fill('#c0ffff');
  strokeWeight(5);
  let ellipseW = map(sin(frameCount * 0.03), -1, 1, width / 3, width / 2.4); 
  ellipse(width / 1.875, height, ellipseW, height / 1.74); 
  
  stroke('#b26666');
  fill('#ffc0c0');
  square(width / 3, height / 1.33, width / 12); 
  square(width / 1.5, height / 1.14, width / 6.66); 
  stroke('#8080ff');
  fill('#4040a0');
  let triY = map(sin(frameCount * 0.1), -1, 1, height / 3.07, height / 2.35); 
  triangle(width / 2, height / 4.44, width / 8.57, triY, width / 3.53, height / 8.16); 
  
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(width / 3, height / 1.33, width / 12, height / 8); 
  ellipse(width / 1.5, height / 1.14, width / 12, height / 8); 
  
  stroke(0);
  fill(0);
  arc(width / 3, height / 1.33, width / 17.14, height / 13.33, radians(0), radians(180)); 
  arc(width / 1.5, height / 1.14, width / 17.14, height / 13.33, radians(0), radians(180)); 
  
  stroke(180);
  fill(255);
  let eyeSizeH = abs(sin(frameCount * 0.2)) * (height / 23.5); 
  ellipse(width / 3, height / 1.33, width / 40, eyeSizeH); 
  ellipse(width / 1.5, height / 1.14, width / 40, eyeSizeH); 
  
  stroke('#000080');
  strokeWeight(8);
  noFill();
  arc(width / 2, height / 1.23, width / 17.14, height / 13.33, radians(340), radians(200)); 
  
  stroke('#40a0ff');
  strokeWeight(5);
  line(width / 12, 0, width / 6, height / 4.44); 
  line(width / 6.66, 0, width / 4.28, height / 6.15);
  line(width / 4.28, 0, width / 3.33, height / 8); 
  
  stroke('#666666');
  strokeWeight(8);
  colorMode(HSB, 360, 100, 100);
  let quadHue = frameCount % 360;
  fill(quadHue, 80, 100);
  quad(width / 1.5, height / 2, width / 1.33, height / 2.66, width / 1.62, height / 1.38, width / 1.33, height / 1.54); 
  colorMode(RGB, 255);
  
  strokeWeight(2);
  fill(245);
  
  let cloudX1 = (width / 1.2) + cos(frameCount * 0.02) * 10;
  let cloudY1 = (height / 2) + sin(frameCount * 0.02) * 5;
  let cloudS1 = map(sin(frameCount * 0.02), -1, 1, width / 13.33, width / 10.9); 
  ellipse(cloudX1, cloudY1, cloudS1, cloudS1);
  
  let cloudX2 = (width / 1.09) + cos(frameCount * 0.03) * 10;
  let cloudY2 = (height / 2) + sin(frameCount * 0.03) * 5;
  let cloudS2 = map(sin(frameCount * 0.03), -1, 1, width / 9.23, width / 8); 
  ellipse(cloudX2, cloudY2, cloudS2, cloudS2);
  
  let cloudX3 = (width / 0.96) + cos(frameCount * 0.01) * 10;
  let cloudY3 = (height / 2) + sin(frameCount * 0.01) * 5;
  let cloudS3 = map(sin(frameCount * 0.01), -1, 1, width / 6.66, width / 5.45); 
  ellipse(cloudX3, cloudY3, cloudS3, cloudS3);
}