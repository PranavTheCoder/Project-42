const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies

var secondAngle,minuteAngle,hourAngle;

function setup() {
  createCanvas(400,400); 

  angleMode(DEGREES);  
  
}

function draw() {
  background(0);

  /*stroke(255);
  strokeWeight(7);
  arc(50,50,80,80,0,PI*2);*/

  translate(200,200);
  rotate(-90);
  hr = hour();
  sc = second();
  mn = minute();
 
  secondAngle = map(sc,0,60,0,360);
  minuteAngle = map(mn,0,60,0,360);
  hourAngle = map(hr % 12,0,12,0,360);
  
  push();
  rotate(secondAngle); 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop(); 

  push();
  rotate(minuteAngle);
  stroke(23,44,251);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(45,45,45);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
}



 