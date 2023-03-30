var garden,rabbit;
var gardenImg,rabbitImg;




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}




function draw() {
  background(0);
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);


var select_sprites = Math.round(random(1, 3)); 
 if (frameCount % 80 == 0) {
  createApples();
 } else if (select_sprites == 2) {
  createOrange();

 } else {
  createrRed();
 }

  drawSprites();
  
}
// criar maças 
  function createApples() {
    apple = createSprite(random(20, 380), 1, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 2; 
    apple.lifetime = 150; 

  }
  //criar folhas laranjas

  function createOrange() {
    orangeL= createSprite(random(20, 380), 1, 10, 10);
    orangeL.addImage(orangeImg);
    orangeL.scale = 0.07;
    orangeL.velocityY = 2; 
    orangeL.lifetime = 150; 

  }
  // criar folhas vermelhas 

  function createrRed() {
    redL= createSprite(random(20, 380), 1, 10, 10);
    redL.addImage(redImg);
    redL.scale = 0.07;
    redL.velocityY = 2; 
    redL.lifetime = 150; 

  }




