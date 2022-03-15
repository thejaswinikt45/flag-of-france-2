function setup() {

  createCanvas(450, 400);
  function createStripe(x,blockColor){
  var stripe = createSprite(x,200,75,150);
 stripe.shapeColor=blockColor;
  }
 //create sprite for flag stripes using function by passing parameters of x position and color 
  

  //Stripe 1 : x-position : 140, color : "blue"
     createStripe(140,"blue");
  //Stripe 1 : x-position : 215, color : "white"
     createStripe(215,"white");
  //Stripe 1 : x-position : 290, color : "red" 
     createStripe(290,"red");
}

function draw() {
  background("honeydew");
  drawSprites();
}
