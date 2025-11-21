let allCorrect = false;
let bg1;
let myFont;
let en1img;
let en2img;
let en3img;
let es1img;
let es2img;
let es3img;

function preload() {
  
  myFont = loadFont("Font.ttf");
  bg1 = loadImage("images/background.png")
  
  en1img = loadImage("en1.png");
  en2img = loadImage("en2.png");
  en3img = loadImage("en3.png");

  es1img = loadImage("es1.png");
  es2img = loadImage("es2.png");
  es3img = loadImage("es3.png");
}


let en1x = 100, en1y = 200;
let en2x = 100, en2y = 100;
let en3x = 100, en3y = 300;


let es1x = 400, es1y = 100;
let es2x = 400, es2y = 300;
let es3x = 400, es3y = 200;


let dragging = false;
let currentWord = 0; 

function setup() {
  createCanvas(600, 400);
  textFont(myFont); 
  textAlign(CENTER, CENTER);
}

function draw() {
 imageMode(CORNER);
  image(bg1, 0, 0, width, height);

  fill(50);
  textSize(14);
  text("Drag the English pictures to the Spanish ones", width / 2, 20);

  imageMode(CENTER);

  image(en1img, en1x, en1y, 100, 100);
  image(en2img, en2x, en2y, 100, 100);
  image(en3img, en3x, en3y, 100, 100);

  image(es1img, es1x, es1y, 100, 100);
  image(es2img, es2x, es2y, 100, 100);
  image(es3img, es3x, es3y, 100, 100);


  fill(40);
  text("home", en1x, en1y);
  text("belong", en2x, en2y);
  text("light", en3x, en3y);

  text("hogar", es1x, es1y);
  text("pertenecer", es2x, es2y);
  text("luz", es3x, es3y);
  
  
  if (allCorrect) {
  fill(0);
  textSize(24);
  text("Great job!", 100, 350);
}
}

function mousePressed() {
  
  if (dist(mouseX, mouseY, en1x, en1y) < 50) {
    dragging = true;
    currentWord = 1;
  } else if (dist(mouseX, mouseY, en2x, en2y) < 50) {
    dragging = true;
    currentWord = 2;
  } else if (dist(mouseX, mouseY, en3x, en3y) < 50) {
    dragging = true;
    currentWord = 3;
  }
}

function mouseDragged() {
  if (!dragging) return;


  if (currentWord === 1) {
    en1x = mouseX;
    en1y = mouseY;
  } else if (currentWord === 2) {
    en2x = mouseX;
    en2y = mouseY;
  } else if (currentWord === 3) {
    en3x = mouseX;
    en3y = mouseY;
  }
}

function mouseReleased() {
  if (!dragging) return;

  let snapDist = 50;

  
  if (currentWord === 1 && dist(en1x, en1y, es1x, es1y) < snapDist) {
    en1x = es1x;
    en1y = es1y;
  }

  if (currentWord === 2 && dist(en2x, en2y, es2x, es2y) < snapDist) {
    en2x = es2x;
    en2y = es2y;
  }

  if (currentWord === 3 && dist(en3x, en3y, es3x, es3y) < snapDist) {
    en3x = es3x;
    en3y = es3y;
    
    if (
  en1x === es1x && en1y === es1y &&
  en2x === es2x && en2y === es2y &&
  en3x === es3x && en3y === es3y
) {
  allCorrect = true;
}
  }

  dragging = false;
  currentWord = 0;
}
 


