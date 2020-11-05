const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var dustbinObj, paperObject;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(600,670,1200,20);
dustbinObj = new Dustbin(1200,650);
paperObject = new Paper(200,450,40);

    

}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
   dustbinObj.display();
    paperObject.display();

}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    }
}