const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var tronco1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(810,350);
    pig2 = new pig(810,220);
    tronco1 = new tronco(810,260,300,PI/2);
    tronco2 = new tronco(810,180,300,PI/2);
    bird1 = new bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    tronco1.display();
    box3.display();
    box4.display();
    tronco2.display();
    pig2.display();
    bird1.display();
}