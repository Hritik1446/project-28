
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,80,30);
	mango3=new mango(1150,130,30);
	mango4=new mango(990,140,30);
	mango5=new mango(1200,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Stone=new stone(225,400,30)
	Shot=new shot(Stone.body,{x:225,y:400})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  Stone.display();
Shot.display();

  groundObject.display();
  collide(mango1,Stone)
  collide(mango2,Stone)
  collide(mango3,Stone)
  collide(mango4,Stone)
  collide(mango5,Stone)
  
  
}
function mouseDragged(){
    
    Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    Shot.flying();
    
}

function collide(body1,body2){
var distance=dist(body1.body.position.x,body1.body.position.y,body2.body.position.x,body2.body.position.y)
if(distance<=body1.r+body2.r){
	Matter.Body.setStatic(body1.body,false)
}

}
