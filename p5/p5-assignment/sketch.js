let bg;
var img;
let song;

function preload() {
  img = loadImage("images/bone.png");
  song = loadSound('sounds/pupsing.mp3');
}

function setup() {
  createCanvas(800, 800);
  bg = loadImage('images/dogm.jpg');
  song.play();
}

function draw() {
  background(bg);
  image(img, mouseX - 190, mouseY - 100, );
  fill(205, 204, 500);

}

function mousePressed() {
bg = loadImage('images/beag.jpg');
image(img, mouseX - 190, mouseY - 100, );

}
