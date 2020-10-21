const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(900,900);
    engine = Engine.create();
    world = engine.world;
    bear = new Box(50,50,90,90)
    ball = new Box(150,80,15,30)
    cookie = new Box(750,400,75,100)
}

function draw(){
    background(0);
    Engine.update(engine);
  bear.display()
  ball.display()
  cookie.display()
}