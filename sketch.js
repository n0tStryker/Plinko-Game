const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos = []
var particles = [] 
var divisions = []
var divisionHeight=300

function setup() {
var canvas = createCanvas(800,400);
engine = Engine.create()
world = engine.world
if (frameCount%60 === 0){
particles.push(new Particle(random(width/2-10, width/2+10,10,10)))
}
for (var k = 0; k <=width; k = k+80 ){
divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))


}
createSprite(400, 200, 50, 50);
}





function draw() {
background(255,255,255);  
drawSprites();
}