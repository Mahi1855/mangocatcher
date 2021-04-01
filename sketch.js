const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1,block2,block3,block4,block5,block6;
var backgroundImg,platform;
var chain,shadow,stand
var score = 0
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

  
    ground = new Ground(400,650,800,5);
    stand = new Ground(450,450,400,5);
    block1 = new Pig(450,430,40,40)
   block2 = new Pig(410,430,40,40)
    block3 = new Pig(490,430,40,40)
   block4 = new Pig(465,390,40,40)
   block5 = new Pig(430,390,40,40)
    block6 = new Pig(445,350,40,40)
   
    bird = new Bird(100,100);
    //shadow = new Log(100,100,100,PI/2)
    chain = new Chain(bird.body,{x:200,y:350})
}

function draw(){
    background("Blue");
    noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    Engine.update(engine);
    
    stand.display()
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
block6.display()
block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()


    bird.display();
  //  shadow.display()S
   chain.display()
    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}

