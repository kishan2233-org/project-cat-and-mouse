var garden,gardenImage;

var mouse,cat;

function preload() {
    //load the images here
   gardenImage=loadImage("images/garden.png");
   mouseImage1=loadImage("images/mouse1.png");
   catImage1=loadImage("images/cat1.png");
   catImage2=loadImage("images/cat2.png","images/cat3.png");
   mouseImage3=loadImage("images/mouse2.png");
  
   catImage4=loadImage("images/cat4.png");
   mouseImage4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
garden= createSprite(400,400,800,800);
garden.addImage(gardenImage);
garden.scale=0.8;

cat=createSprite(530,530,30,30);
cat.addImage(catImage1);
cat.scale=0.1;

mouse=createSprite(150,550,30,30);
mouse.addImage(mouseImage1);
mouse.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();

    if (cat.x - mouse.x < (cat .width - mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catLastImage",catImage4);
      cat.changeAnimation("catLastImage");
      cat.x=300;
      cat.scale=0.2;
      mouse.addAnimation("standing",mouseImage4);
    mouse.changeAnimation("standing");
    mouse.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat running",catImage2);
    cat.changeAnimation("cat running");
    mouse.addAnimation("teasing",mouseImage3);
    mouse.changeAnimation("teasing");
mouse.frameDelay=25;
  } 
 
}
