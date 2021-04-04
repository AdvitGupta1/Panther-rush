var panther,pantherstandImg,pantherjumpImage,pantherattackImg
var background,backgroundImg
var platImg,platimg2
var posY
var gamestate=0;

function preload(){
  pantherstandImg=loadImage("images/Panther 1.png");
  pantherjumpImage=loadImage("images/Panther_2.png");
  pantherattackImg=loadImage("images/Panther-3.png");

  backgroundImg=loadImage("images/city.png");

  platImg=loadImage("images/Rock1.png");
platimg2=loadImage("images/Rock2.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  panther=createSprite(displayWidth/2,displayHeight/2+100,50,50);
  panther.addImage(pantherstandImg);
  panther.scale=0.2;

  posY=displayHeight;
  stoneGroup=new Group();
 }

function draw() {
  background(backgroundImg);  
  drawSprites();
  if(gamestate===0){
  rocks(20);
  if(keyDown("up")){
    panther.y-=10;
  }
  if(keyDown("left")){
    panther.x-=5;
  }
  if(keyDown("right")){
    panther.x+=5;
  }}
  if(stoneGroup.isTouching(panther)){
    rocks(1);
    gamestate=1;
  }else{
  camera.position.y=panther.y;
  panther.y=panther.y+3;
}
console.log(displayHeight/2);
console.log(camera.position.y);
if(gamestate===1){
  textSize(30);
  fill("white");
  text("Game over. Please click space to restart",displayWidth/2-200,panther.y);
  if(keyCode===32){
    stoneGroup.destroyEach();
    posY=camera.position.y;
    gamestate=0;
  }
}
}
function rocks(number){
  var rand=Math.round(random(1,2));
  if(frameCount%number===0){
    posY=posY-100
  var platform=createSprite(random(10,displayWidth),posY,50,50);
  if(rand==1){
    platform.addImage(platImg);
    platform.scale=0.7;
  } else{
    platform.addImage(platimg2);
   platform.scale=0.7;
  } stoneGroup.add(platform);
}
} 