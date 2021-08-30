var bg, sleep, brush, gym, eat, drink, move,bath;



function preload() {
bg=loadImage("images/iss.png");
sleep=loadImage("images/sleep.png");
brush=loadImage("images/brush.png");
gym=loadImage("images/gym1.png,gym2.png,gym11.png,gym12.png");
eat=loadImage("images/eat1.png,eat2.png");
drink=loadImage("images/drink1.png,drink2.png");
move=loadImage("images/move.png,move1.png");
bath=loadImage("images/bath1.png.bath2.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 var astronaut
 astronaut=createSprite(300,200)
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.1;

 astronaut.bounceOff(edges);
}

//instructions
//1. UP_ARROW = brushing
//2. DOWN_ARROW = gymming
//3. LEFT_ARROW = eating
//4. RIGHT_ARROW = bathing
//5. m key = moving

function draw() {
  background("black");  

  if(keydown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keydown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keydown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keydown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyPressed("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }




  drawSprites();
}