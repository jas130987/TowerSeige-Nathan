const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var ball;
var ground1;
var slingshot1;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11,
block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
var score = 0;
var bg = "day.jpg";
var backgroundImg;

function preload(){
polygon = loadImage("polygon.png");
//getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ball = Bodies.circle(60, 200, 30);
    World.add(world, ball);

    ground1 = new Ground(600, 390, 1200, 20);

    slingshot1 = new Slingshot(this.ball, {x:100, y:200});

    stand1 = new Stand(390, 300, 250, 10);
    stand2 = new Stand(700, 200, 200, 10);

    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    block16 = new Block(390, 155, 30, 40);
    block17 = new Block(640, 175, 30, 40);
    block18 = new Block(670, 175, 30, 40);
    block19 = new Block(700, 175, 30, 40);
    block20 = new Block(730, 175, 30, 40);
    block21 = new Block(760, 175, 30, 40);
    block22 = new Block(670, 135, 30, 40);
    block23 = new Block(700, 135, 30, 40);
    block24 = new Block(730, 135, 30, 40);
    block25 = new Block(700, 95, 30, 40);
}

function draw(){
 
    background(0);

textSize(35)
fill("grey")
text("Score: " + score, 980, 40)

ground1.display();
slingshot1.display();
stand1.display();
stand2.display();
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
block16.display();
block16.score();
block17.display();
block17.score();
block18.display();
block18.score();
block19.display();
block19.score();
block20.display();
block20.score();
block21.display();
block21.score();
block22.display();
block22.score();
block23.display();
block23.score();
block24.display();
block24.score();
block25.display();
block25.score();


imageMode(CENTER);
image(polygon, ball.position.x, ball.position.y, 40, 40);
}

function mouseDragged(){
Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingshot1.fly();
}

function keyPressed(){
if(keyCode === 32){
 Matter.Body.setPosition(ball.body, {x:60, y:200});
slingshot1.attach(this.ball);
}
}

/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "day.jpg";
    }
    else{
        bg = "night.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/