class food{
    constructor(){
        
        this.image=loadImage("images/Milk.png")
    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70)
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
    updateFoodStock(){
        foodStock=database.ref('Food');
        foodStock.on("value",function(data){
            foodS=data.val();;
           });
    }
  getfoodStock(){
  foodStock=database.ref('Food');
  foodStock.on("value",function(data){
  foodS=data.val();;
 });
    }
feedDog(){
    dog.addImage(happyDog)
    foodObj.updateFoodStock(foodObj.getfoodStock()-1);
    database.ref('/').update({
        Food:foodS
    })
    }
   
addFoods(){
    foodS++
    database.re('/').update({
        Food:foodObj.getfoodStock(),
        FeedTime:hour()
    })
}
deductStock(x){
        if(x<=0){
          x=0;
        }else{
          x=x-1
        }
        database.ref('/').update({
          Food:x
        })
      }
}