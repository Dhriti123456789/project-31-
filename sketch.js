const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1;
var edge,edge1,edge2;
var d1,d2,d3,d4,d5,d6,d7;

var particles =[];
var plinkoes =[];
var divisions = [];

var divisionHeight=300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  // ground and edges
  ground1 = new ground(240,795,480,10);
  edge1 = new ground(5,400,10,800);
  edge = new ground(475,400,10,800);
  edge2 = new ground(240,5,480,10);

  // divisions
  d1 = new Divisions(240,785,460,15);
  for (var k = 0; k <=width; k= k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

// plinko
for( var j = 40; j <=width; j=j+50){
  plinkoes.push(new Plinko(j,75));
}
for(var j = 15; j <=width; j=j+50){
  plinkoes.push(new Plinko(j,175));
}
for(var j = 30; j<=width; j=j+50){
  plinkoes.push(new Plinko(j,275));
}
for (var j = 50; j<=width; j=j+50){
  plinkoes.push(new Plinko(j,375));
}


}

function draw() {
  background("black"); 
  Engine.update(engine); 

  
  ground1.display();
  edge1.display();
  edge.display();
  edge2.display();

 d1.display();
for (var k = 0; k < divisions.length;k++){
  divisions[k].display();
}


if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
for(var j = 0; j < particles.length; j++){
  particles[j].display();
}

for(var j = 0; j< plinkoes.length; j++){
  plinkoes[j].display();
}



}