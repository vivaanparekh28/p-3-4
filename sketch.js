const Body=Matter.Body
const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
const Constraint=Matter.Constraint

var backgroundImg

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1000, 500);
  
  engine=Engine.create()
  world=engine.world;
  hero=new Hero()
  rope=new Rope(hero.body,{x:200,y:200})
  ground=new Ground()
  block=new Block(300,300)
  block1=new Block(322,300)
  block2=new Block(344,300)
  block3=new Block(366,300)
  block4=new Block(300,278)
  block5=new Block(322,278)
  block6=new Block(344,278)
  block7=new Block(300,256)
  block8=new Block(322,256)
  block9=new Block(300,234)
  monster=new Monster()
  // create sprites here

}

function draw() {
imageMode(CENTER);
 background(0);
 
 image(backgroundImg,500,250,1000, 500);
 
  Engine.update(engine);
  hero.display() 
  rope.display() 
  ground.display()
  block.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  monster.display()
  

 
}
function mouseDragged(){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY})

 
}

