
const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground1,box1,box2,log1,pig1,bird1;
function setup() {
  var canvas=createCanvas(1200,400);
  engine = Engine.create();
  world =engine.world;
  ground1=new Ground(600,400,1200,20);
 box1=new Box(700,320,70,70);
 box2=new Box(920,320,70,70);
 log1=new Log(810,200,300,PI/2);
 pig1=new Pig(810,350);
 bird1=new Bird(0,0);
}

function draw() {
  background(255,1,155); 
  Engine.update(engine);
 
 box1.display();
 box2.display();
 ground1.display();
 log1.display();
 pig1.display();
 bird1.display();
}

