const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1,ground;


function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create
    world = engine.world;

    
	
	//Create the Bodies Here.
ground=createSprite(600,340,1200,20)
ground.shapeColor=("yellow")

paper1=new paper(200,450,40)

holder_bottom=createSprite(1000,325, 150,10)
	holder_bottom.shapeColor=("white")

	holder_right_side=createSprite(1078,280,8,100)
	holder_right_side.shapeColor=("white");

	holder_left_side=createSprite(925, 280,8,100)
	holder_left_side.shapeColor=("white");
  
}


function draw() {
  background(0);
  rectMode(CENTER);
function pressed(){
  if(keyCode===UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{
      x:85,
      y:-85,
    });
  }
}
paperObject.display()
  drawSprites();
 
}



