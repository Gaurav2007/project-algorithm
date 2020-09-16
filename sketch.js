
var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX = 7;
  movingRect= createSprite(400,200,80,30)
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX = -7;
}

function draw() {
  background(0,0,0);  
//movingRect.x= mouseX;
//movingRect.y=mouseY;
if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 )
  {
movingRect.velocityX = movingRect.velocityX*-1;
fixedRect.velocityX = fixedRect.velocityX*-1;
  }
  if(movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2)
{
//movingRect.shapeColor="red";
//fixedRect.shapeColor="red";
}
else
{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  }

  drawSprites();
}