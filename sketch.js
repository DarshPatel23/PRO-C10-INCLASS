var trex;
var runningtrex
var edges
var ground
var groundimg

function preload(){
  runningtrex = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("runningtrex",runningtrex);
  edges = createEdgeSprites();
  trex.scale = 0.8;
  ground = createSprite(200,180,400,20);
  ground.x = ground.width/2
  ground.addImage("ground",groundimg)
}

function draw(){
  background ("white");
  
 if(keyDown("space")){
trex.velocityY = -10;
 } 
 trex.velocityY += 0.5;
 
 trex.collide(ground);
 
 ground.velocityX = -2;
 
 if(ground.x<0){
  ground.x = ground.width/2;
 }
  
  
  drawSprites();
}