const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var sling1
var gameState = "onsling"
var backg 
var backgIMAGE 
var score = 0

function preload() {
    dateBg()
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    // created platform
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,30);

    
    sling1 = new sling(bird.body,{x:200, y:70})

}

function draw(){
    if(backgIMAGE)
    background(backgIMAGE);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    //displayed platform
    platform.display();


    sling1.display()
    pig1.score()
    pig3.score()
text("YOUR SCORE: "+ score, 1050,25)

}
function mouseDragged(){
    if(gameState === "onsling")
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})

}
function mouseReleased(){
    sling1.fly()
    gameState = "launch"
}
function keyPressed(){
    if (keyCode === 32){
      sling1.reset(bird.body)
      bird.smoke = []
      Matter.Body.setPosition(bird.body,{x:200, y:70})
     // bird.body.speed  = 1
      
    }
}

async function dateBg(){
var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London")
var responseJSON = await response.json()
var dt = responseJSON.datetime
var hour = dt.slice(11,13)
console.log(hour)
if(hour >= 19 ){
    //background(backgroundNIGHTImg)
    backg ="sprites/bg2.jpg"
}
else{
    backg = "sprites/bg.png"
}
  backgIMAGE = loadImage(backg)
}


