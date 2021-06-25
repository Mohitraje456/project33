const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var plinko1
var plinkos = [];
var divisions = [];
var particles = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,720);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(240,711,480,15)
  
  for (var j = 40; j <= width; j = j + 50){ 
    plinkos.push(new Plinko(j, 77.5)); 
  }

  for (var j = 15; j <= width; j = j + 50){ 
    plinkos.push(new Plinko(j, 155)); 
  }

  for (var j = 40; j <= width; j = j + 50){ 
    plinkos.push(new Plinko(j, 232.5)); 
  }

  for (var j = 15; j <= width; j = j + 50){ 
    plinkos.push(new Plinko(j, 310)); 
  }

  


  for (var k = 0; k <= width; k = k + 80){ 
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight)); 
  }


  



}

function draw() {
  background(0);  
  ground.display();
  for (var i = 0; i < plinkos.length; i++){
     plinkos[i].display(); 
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2-10),10,10)); 
    }
  
  for (var j = 0; j < particles.length; j++){
      particles[j].display(); 
    }

  for (var k = 0; k < divisions.length; k++){
      divisions[k].display(); 
    }    

  drawSprites();
}