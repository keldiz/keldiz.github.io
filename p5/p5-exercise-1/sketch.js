
let carX;
let vroom;


function setup (){
 createCanvas(500, 500);

vroom = new p5.Oscillator('square')

// //draw race car wheels
// fill(0);
// stroke(255);
// strokeWeight(5);
// ellipse(60, 350, 20, 20);
// ellipse(90, 350, 20, 20);

  console.log('carX is  '+ carX);
carX = 50
}

function draw() {
  background (0, 255, 0, 80);



if (carX > 500) {
carX = -50;
} else if(carX > 400) {
  carX +=6
} else {
  // carX = carX + 3;
  carX +=3;
}
} else {
  vroom.freq(5);
}


  //draw race car body
  nostroke();
  fill)(40, 50, 250);
   rect(carX, 300, 50, 30);
 }
}

function mousePressed() {
carX = 0;
console.log("mouse IS CLICKED")
vroom.stop();
}
