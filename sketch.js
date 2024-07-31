function setup() {
  createCanvas(600, 600);
   background("	#E6E6FA");
}

function draw() {
  
  stroke("#40E0D0");
  fill("#008080");
  
  
  if(mouseIsPressed){
  circle(mouseX,mouseY,10);
  }
}
