var bullet, wall, speed, weight, damage,small_bullet,medium_bullet,large_bullet, thickness;


function preload()

{
  small_bullet = loadImage("small bullet.png");
  medium_bullet = loadImage("medium bullet.png");
  large_bullet = loadImage("large bullet.png")
}

function setup() {
  createCanvas(1600,400);

  speed = random(200,400);
  weight = random(30,60);

  thickness = random(20,90);

  bullet = createSprite(50,200,50,50);

  wall = createSprite(1500,200,thickness, height/2);

  bullet.velocityX = speed;
}


function collision()
{
if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX = 0;
damage  = Math.round(0.5 * weight * speed * speed/(thickness * thickness * thickness));

if (damage<10)
  {
  text("The bullet is effective against the wall, damage is "+damage+"!",800,200);
  }
else if(damage>10)
{
  fill(0,0,0);
  text("Uh oh! Damage is "+damage+"! The bullet is ineffective against the wall!",800,200);
}
}
}

function bulletSize()
{
  if (weight<40)
  {
  bullet.addImage("small",small_bullet);
  bullet.scale = 0.1;
  }
  else if (weight > 40 && weight < 50)
  {
    bullet.addImage("medium",medium_bullet);
    bullet.scale = 0.1;
  }
  else if (weight>50)
  {
    bullet.addImage("large",large_bullet);
    bullet.scale = 0.1;
  }
  
}


function draw() {
  background(255,255,255);  
  drawSprites();
  collision();
  bulletSize();
}