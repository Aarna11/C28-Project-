
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3;
var world,boy,slingshot;

function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1150,100,30);
   mango3=new mango(1050,100,30);
   stoneObj=new Stone(250,400);;
	  
	slingshot=new SlingShot(stoneObj.body,{x:195 , y:335});

  treeObj=new tree(1050,580);
	//groundObject=new ground(width/2,600,width,20);
    
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
  stoneObj.display();
  
 // groundObject.display();
 detectCollission(stoneObj,mango1);
 detectCollission(stoneObj,mango2);
 detectCollission(stoneObj,mango3);
}

function mouseDragged(){
  console.log("hi")
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
  
}
function mouseReleased(){
  console.log("hi2")
  slingshot.fly();
}
function detectCollission(stoneObj){
  mango1bodyposition=mango1.body.position;
  stoneposition=stoneObj.body.position;
  var distance=dist(stoneposition.x,stoneposition.y,mango1bodyposition.x,mango1bodyposition.y)
  if(distance<=mango1.r+stoneObj.r){
    Matter.Body.setStatic(mango1.body,false)


  }
  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
      slingShot.attach(stone.body);
      console.log(slingShot);
    }
  }


}
