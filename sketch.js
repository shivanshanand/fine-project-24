
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,wall1,wall2,wall3,ground1;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new paper(100,50,40);
	wall1=new wall(740,370,170,20);
	wall2=new wall(650,330,20,100);
	wall3=new wall(820,330,20,100);
	ground1=new ground(600,380,1200,10);
}

function draw() {
  background(140);
  Engine.update(engine);

  paper1.display();
  wall1.show();
  wall2.show();
  wall3.show();
  ground1.show();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-80});
	}
}



