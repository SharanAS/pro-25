const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side2,side3,paperimg,dustimg,paper1,ground;
var  engine,world;
function preload(){
paperimg=loadImage('paper.png');
dustimg=loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper1=new paper(200,300,20);
	side1= new side (800,680,15,15);
	side2=new side (725,600,15,170);
	side3 = new side(875,600,15,170);
    ground = new Ground(700,700,1400,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255);
  ground.display();
  side1.display();
  side2.display(); 
   side3.display();
   image(dustimg,500,490,200,200);
   paper1.display();
  
  drawSprites();
 
}
function keyPressed()	{
	if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body, paper1.body.position, {x:25,y:-100});
	}
}



