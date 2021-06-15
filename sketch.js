const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4;

var BlockPink1, BlockPink2, BlockPink3;

var BlockRed1, BlockRed2, BlockRed3, BlockRed4;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //first level
  BlockBlue1 = new Box(200, 182, 20, 20);

  BlockBlue2 = new Box(220, 182, 20, 20);

  BlockBlue3 = new Box(240, 182, 20, 20);

  BlockBlue4 = new Box(260, 182, 20, 20);


  BlockPink1 = new BoxPink(201, 2, 20, 20);

  BlockPink2 = new BoxPink(220, 2, 20, 20);

  BlockPink3 = new BoxPink(240, 2, 20, 20);

  BlockRed1  = new Box(202, 182, 20, 20);

  BlockRed2  = new Box(220, 182, 20, 20);

  BlockRed3 = new Box(240, 182, 20, 20);

  BlockRed4 = new Box(260, 182, 20, 20);

  polygon_1 = new Shape(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();

  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();

  BlockRed1.display ();
  BlockRed2.display ();
  BlockRed3.display ();
  BlockRed4.display ();
  
  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}
