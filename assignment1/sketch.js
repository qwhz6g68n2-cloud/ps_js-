function setup() {
 createCanvas(600,400); 
}
  
function draw() {
  background('#ffffe5');
  
  stroke('#c00060');
  strokeWeight(10);
  line(600,400,400,220);
  line(600,0,400,180);
  
  stroke('#800000');
  strokeWeight(15);
  line(50,90,180,300);
  
  stroke('#80c0ff');
  fill('#c0ffff');
  strokeWeight(5);
  ellipse(320,400,250,230)
  
  stroke('#b26666');
  fill('#ffc0c0');
  square(200,300,50)
  square(400,350,90)
  
  stroke('#8080ff');
  fill('#4040a0');
  triangle(300,90,70,150,170,49,500)
  
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(200,300,50,50);
  ellipse(400,350,50,50);
  
  stroke(0);
  fill(0);
  arc(200,300,35,30,radians(0),radians(180));
  arc(400,350,35,30,radians(0),radians(180));
  
  stroke(180);
  fill(255);
  ellipse(200,300,15,17);
  ellipse(400,350,15,17);
  
  stroke('#000080');
  strokeWeight(8);
  noFill();  arc(300,325,35,30,radians(340),radians(200));
  
  stroke('#40a0ff');
  strokeWeight(5);
  line(50,0,100,90)
  line(90,0,140,65)
  line(140,0,180,50)
  
  stroke('#666666');
  strokeWeight(8);
  fill('#ffff33')
quad(400,200,450,150,370,290,450,260)
  
  strokeWeight(2);
  fill(245)
  ellipse(500,200,50,50);
  ellipse(550,200,70,70);
  ellipse(620,200,100,100);
} 