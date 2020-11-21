var polygon,slingShot,circle,Matter,bodies,world,polygon_image,position
var ground;
var stand1,stand2;
var scoore=0;
var getBackgroundImg;

function setup() {
  createCanvas(800,400);
  createSprite(350, 200, 10, 100);
  const Bodies = World.Bodies;
}

function draw() {
  background(255,255,255);  
  Text("SCORE: "+scoore,750,40);

World.add=(world,polygon);

if(block1.velocityX=3,block2.velocityX=3,block3.velocityX=3,block4.velocityX=3,block5.velocityX=3,block6.velocityX=3,block7.velocityX=3,block8.velocityX=3,block9.velocityX=3,block10.velocityX=3,block11.velocityX=3,block12.velocityX=3){

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();


}

imageMode(CENTER)
Image(polygon_image,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}

function mouseDragged(){

       Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
   slingshot.fly();
   gameState = "launched";
}

 function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      background= "yellow";
  }
  else{
background="blue";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
