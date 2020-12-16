//Create variables here
var dog,dogimg, happyDog,happydogimg, database, foodS, foodStock;

function preload()
{
  dogimg = loadImage('images/dogImg.png');
  happydogimg  = loadImage('images/dogImg1.png');

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(350,350);
  dog.addImage(dogimg);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
 
  
}

function draw() {  
  background(46, 139, 87);
  drawSprites();
  if(keyWentDown(UP_ARROW)){
writeStoke(foodS)
dog.addImage(happydogimg);
  }
  textSize(32);
  text('Note:Press UP_ARROW Key to feed Drago Milk!', 10, 30);
  fill(255,255,255);

}

readStock(data){ 
  foodS = data.val(); } 

