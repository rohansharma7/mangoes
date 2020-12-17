const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var boy, boyImage;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,15);

	stone = new Stone(145,555,70,70);

	mango1 = new Mango(700,400,30);
	mango2 = new Mango(630,380,30);
	mango3 = new Mango(720,460,30);
	mango4 = new Mango(635,450,30);
	mango5 = new Mango(636,520,30);


	arm = new Arm(stone.body,{x:120,y:600});

	tree = new Tree(600,490,20,20);

	boy = new Boy(200,645,20,20);


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(230);

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  arm.display();

  tree.display();

  boy.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);

}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    arm.fly();
}

function detectcollision(lstone,lmango)
{
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed()
  {
    if(keyCode === 32)
    {
      Matter.Body.setPosition(stone.body, {x:145,y:555})
      arm.attach(stone.body);
    }
  }




