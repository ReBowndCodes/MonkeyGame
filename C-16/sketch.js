
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var Score=0;
var ground, invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation('moving', monkey_running);
  monkey.scale = 0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  foodGroup = new Group()
}


function draw() {
 background('white');
  
  stroke('white');
  textSize(20);
  fill ('white');
  text("score: "+Score, 500,50);
  
  stroke ('black');
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time: "+ survivalTime,100,50 );
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(invisibleGround);
  
  drawSprites();
  spawnFood();
  spawnObstacles();
}


function spawnFood() {
  
  if (frameCount % 80 === 0) {
    Food = createSprite(600,120,40,10);
    Food.y = Math.round(random(120,190));
    Food.addImage(bananaImage);
    Food.scale = 0.1;
    Food.velocityX = -3;

    Food.lifetime = 200;

    foodGroup.add(Food);
  }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
    obstacle = createSprite(400,330,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3 
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   
  
 }
}



