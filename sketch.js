
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

console.log(width);
console.log(height);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 

	bob1= new bob(250,480,20)
	bob2=new bob(400,480,20)
	bob3=new bob(580,480,20)
	bob4=new bob(750,480,20)
	bob5=new bob(870,480,20)
	groundObj=new ground(800,175,230,30)
	rope1=new Chain(bob1.body,groundObj.body,-bobDiameter*2)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  groundObj.display();
  rope1.display();
  drawSprites();
 
}



