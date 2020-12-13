const Engine = Matter.Engine;
const World = Matter.Engine;
const Bodies = Matter.Engine;

var engine,world;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engie = Engine.create();
    world = engine.world;
    ground = new Ground (200,300,50,50)
    box1 = new Box(200,300,50,50)
    box2 = new Box(230,100,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
}