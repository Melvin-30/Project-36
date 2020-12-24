var dog,dogimg, happyDog, database, foodS, foodStock,lastFed,Food,foodObj;

function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800,600);
  database = firebase.database();
  foodObj=new food();
  dog=createSprite(650,400,50,50)  
  dog.scale=0.25;
  foodObj.getfoodStock()
  dog.addImage(dogimg);
  Feed=createButton("Feed the dog");
  Feed.position(700,95);
  Feed.mousePressed(foodObj.feedDog())
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(foodObj.feedDog())
}


function draw() {  
  background(46,139,87)
  drawSprites();
  fill("black");
  textSize(15);
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
  if(lastFed>=12){
    text("Last Feed : "+lastFed+"PM",350,30)
  }else if(lastFed===0){
    text("Last Feed : 12AM ",350,30)
  }else{
    text("Last Feed : "+lastFed+"AM",350,30)
  }
  
  //add styles here
  
}





