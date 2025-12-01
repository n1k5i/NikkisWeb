let allCorrect = false;
let level = 1;
let maxLevel = 3;

let bgImage;
let font;
let englishImg1;
let englishImg2;
let englishImg3;
let spanishImg1;
let spanishImg2;
let spanishImg3;


let levels = [
  {
    en: ["home", "belong", "light"],
    es: ["casa", "pertenecer", "luz"]
  },
  {
    en: ["family", "move", "learn"],
    es: ["familia", "moverse", "aprender"]
  },
  {
    en: ["memory", "return", "future"],
    es: ["recuerdo", "devolver", "futuro"]
  }
];


let en1x = 100, en1y = 200;
let en2x = 100, en2y = 100;
let en3x = 100, en3y = 300;

let es1x = 400, es1y = 100;
let es2x = 400, es2y = 300;
let es3x = 400, es3y = 200;

let dragging = false;
let whichWord = 0;  

function preload() {
  font = loadFont("Font.ttf");
  bgImage = loadImage("background.png");
  
  englishImg1 = loadImage("en1.png");
  englishImg2 = loadImage("en2.png");
  englishImg3 = loadImage("en3.png");

  spanishImg1 = loadImage("es1.png");
  spanishImg2 = loadImage("es2.png");
  spanishImg3 = loadImage("es3.png");
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  resetPositions();
}

function draw() {
  imageMode(CORNER);
  image(bgImage, 0, 0, width, height);

  fill(50);
  textSize(14);
  text("Drag the English pictures to the Spanish ones", width / 2, 20);
  text("Level " + level + " of " + maxLevel, width / 2, 40);

  imageMode(CENTER);
  image(englishImg1, en1x, en1y, 100, 100);
  image(englishImg2, en2x, en2y, 100, 100);
  image(englishImg3, en3x, en3y, 100, 100);

  image(spanishImg1, es1x, es1y, 100, 100);
  image(spanishImg2, es2x, es2y, 100, 100);
  image(spanishImg3, es3x, es3y, 100, 100);

  let current = levels[level - 1];

  fill(40);
  textSize(16);
  text(current.en[0], en1x, en1y);
  text(current.en[1], en2x, en2y);
  text(current.en[2], en3x, en3y);

  text(current.es[0], es1x, es1y);
  text(current.es[1], es2x, es2y);
  text(current.es[2], es3x, es3y);

  if (allCorrect) {
    fill(0);
    textSize(20);
    if (level < maxLevel) {
      text("Great job! Click for the next level", width / 2, 360);
    } else {
      text("Congrats you finished all levels! Click to restart", width / 2, 360);
    }
  }
}

function mousePressed() {
  
  if (allCorrect) {
    level++;
    if (level > maxLevel) level = 1;
    resetPositions();
    allCorrect = false;
    return;
  }

  
  if (dist(mouseX, mouseY, en1x, en1y) < 50) {
    dragging = true;
    whichWord = 1;
  } else if (dist(mouseX, mouseY, en2x, en2y) < 50) {
    dragging = true;
    whichWord = 2;
  } else if (dist(mouseX, mouseY, en3x, en3y) < 50) {
    dragging = true;
    whichWord = 3;
  }
}

function mouseDragged() {
  if (!dragging) return;

  if (whichWord === 1) {
    en1x = mouseX;
    en1y = mouseY;
  } else if (whichWord === 2) {
    en2x = mouseX;
    en2y = mouseY;
  } else if (whichWord === 3) {
    en3x = mouseX;
    en3y = mouseY;
  }
}

function mouseReleased() {
  if (!dragging) return;

  let snap = 50;

  if (whichWord === 1 && dist(en1x, en1y, es1x, es1y) < snap) {
    en1x = es1x;
    en1y = es1y;
  }

  if (whichWord === 2 && dist(en2x, en2y, es2x, es2y) < snap) {
    en2x = es2x;
    en2y = es2y;
  }

  if (whichWord === 3 && dist(en3x, en3y, es3x, es3y) < snap) {
    en3x = es3x;
    en3y = es3y;
  }

  
  if (
    en1x === es1x && en1y === es1y &&
    en2x === es2x && en2y === es2y &&
    en3x === es3x && en3y === es3y
  ) {
    allCorrect = true;
  }

  dragging = false;
  whichWord = 0;
}

function resetPositions() {
  
  en1x = 100; en1y = 200;
  en2x = 100; en2y = 100;
  en3x = 100; en3y = 300;

  
  es1x = 400; es1y = 100;
  es2x = 400; es2y = 300;
  es3x = 400; es3y = 200;

  allCorrect = false;
  dragging = false;
  whichWord = 0;
}

  