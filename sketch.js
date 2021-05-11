var bullet,wall,wall2,wall3,wall4;
var car2,car3,car4;


var weight,speed;

var damage;
var thick ;


function setup() {
  createCanvas(1600,600);

 

  speed = random(223,321);
  speed2 = random(30,103);
  speed3 = random(30,103);
  speed4 = random(30,103);
  weight = random(30,52);
  thick = random(20,40)

  bullet =  createSprite(50, 200, 50, 50);
bullet.shapeColor = "white"
  bullet.velocityX = speed;


 
  wall = createSprite(1200,200,60,100);
 


}
function draw() {



  background(0,255,0);
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0
     var damage = 0.5*weight*weight*weight/thick/thick/thick
     if(damage>3.68){
       bullet.shapeColor = "red"
     }
     if(damage<3.68){
      bullet.shapeColor = "green"
    }
    
  }
  console.log(damage)
    drawSprites();
  }
